import { Body, Controller, Get, Header, HttpCode, Inject, OnModuleInit, Post, Sse, Req, Res } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Subject } from 'rxjs';

@Controller('sse')
export class SseController implements OnModuleInit {

  private subscribers = {};

  public constructor(
    @Inject('INVENTORY_SERVICE')
    private readonly inventoryClient: ClientKafka,
    @Inject('TWITCH_SERVICE')
    private readonly twitchClient: ClientKafka
  ) { }

  async onModuleInit(): Promise<void> {
    /*this.inventoryClient.subscribeToResponseOf(CategoryPatterns.CREATE);
    this.inventoryClient.subscribeToResponseOf(CompanyPatterns.CREATE);
    this.inventoryClient.subscribeToResponseOf(ItemPatterns.CREATE);
    await this.inventoryClient.connect();
    //
    this.twitchClient.subscribeToResponseOf(BotPatterns.PING);
    this.twitchClient.subscribeToResponseOf(BotPatterns.PONG);
    this.twitchClient.subscribeToResponseOf(BotPatterns.JOIN);
    this.twitchClient.subscribeToResponseOf(BotPatterns.PART);
    this.twitchClient.subscribeToResponseOf(BotPatterns.MESSAGE);
    await this.twitchClient.connect();*/
  }

  private subscribeToEvents(request, response) {
    const subscriberKey = Date.now();
    //
    request.on('close', () => {
      response.end();
      delete(this.subscribers[subscriberKey]);
    });
    //
    this.subscribers[subscriberKey] = {
      request,
      response
    };
    return response;
  }

  private transformEventData(body): any {
    return (`data:${body}\n\n\n`);
  }

  @Post('')
  generateEvents(@Body() body): void {
    for (const subscriberKey in this.subscribers) {
      this.subscribers[subscriberKey].response.write(this.transformEventData(JSON.stringify(body)));
      console.debug(`Sent body to subscriber ${subscriberKey}.`);
    }
  }

  @Get('')
  sseUpdates(
    @Req() req,
    @Res() res,
  ) {
    res.writeHead(200, {
      Connection: 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache'
    });
    return this.subscribeToEvents(req, res);
  }

}
