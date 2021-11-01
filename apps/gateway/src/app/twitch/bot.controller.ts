import { Controller, Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { BotPatterns, CategoryPatterns } from '@thoraxia/shared';
import * as tmi from 'tmi.js';
import { environment } from '../../environments/environment';
import { HttpService } from '@nestjs/axios';

@Controller('twitch/bot')
export class BotController implements OnModuleInit {

  private botClient: tmi.Client;

  public constructor(
    @Inject('TWITCH_SERVICE')
    private readonly client: ClientKafka,
    private readonly http: HttpService,
  ) {
    this.botClient = new tmi.Client({
      options: { debug: false },
      identity: {
        username: environment.TWITCH_USERNAME,
        password: environment.TWITCH_OAUTH,
      },
      channels: ['toxictoast', 'shroud'],
    });
  }

  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf(BotPatterns.JOIN);
    this.client.subscribeToResponseOf(BotPatterns.PART);
    this.client.subscribeToResponseOf(BotPatterns.MESSAGE);
    this.client.subscribeToResponseOf(BotPatterns.PING);
    this.client.subscribeToResponseOf(BotPatterns.PONG);
    await this.client.connect();
    //
    this.botClient.connect().then(() => {
      this.onPing();
      this.onPong();
      this.onJoin();
      this.onPart();
      this.onMessage();
    });
  }

  private async onJoin(): Promise<void> {
    this.botClient.on('join', (channel: string, username: string, self: boolean) => {
      this.http.post('http://localhost:3333/api/sse', { type: BotPatterns.JOIN, channel, username, self }).toPromise();
      this.client
        .send(BotPatterns.JOIN, { channel, username, self })
        .toPromise()
        .catch((error) => {
          Logger.error(error);
        })
        .then((data) => {
          Logger.debug(data);
        });
    });
  }

  private async onPart(): Promise<void> {
    this.botClient.on('part', (channel: string, username: string, self: boolean) => {
      this.http.post('http://localhost:3333/api/sse', { type: BotPatterns.PART, channel, username, self }).toPromise();
      this.client
        .send(BotPatterns.PART, { channel, username, self })
        .toPromise()
        .catch((error) => {
          Logger.error(error);
        })
        .then((data) => {
          Logger.debug(data);
        });
    });
  }

  private async onMessage(): Promise<void> {
    this.botClient.on('message', (channel: string, userstate: any, message: string, self: boolean) => {
      this.http.post('http://localhost:3333/api/sse', { type: BotPatterns.MESSAGE, channel, userstate, message, self }).toPromise();
      this.client
        .send(BotPatterns.MESSAGE, { channel, userstate, message, self })
        .toPromise()
        .catch((error) => {
          Logger.error(error);
        })
        .then((data) => {
          Logger.debug(data);
        });
    });
  }

  private async onPing(): Promise<void> {
    this.botClient.on('ping', () => {
      this.http.post('http://localhost:3333/api/sse', { type: BotPatterns.PING, date: new Date() }).toPromise();
      this.client
        .send(BotPatterns.PING, { })
        .toPromise()
        .catch((error) => {
          Logger.error(error);
        })
        .then((data) => {
          Logger.debug(data);
        });
    });
  }

  private async onPong(): Promise<void> {
    this.botClient.on('pong', (latency) => {
      this.http.post('http://localhost:3333/api/sse', { type: BotPatterns.PONG, date: new Date(), latency }).toPromise();
      this.client
        .send(BotPatterns.PONG, { latency })
        .toPromise()
        .catch((error) => {
          Logger.error(error);
        })
        .then((data) => {
          Logger.debug(data);
        });
    });
  }

}
