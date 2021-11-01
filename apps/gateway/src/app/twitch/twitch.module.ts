import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { environment } from '../../environments/environment';
import { BotController } from './bot.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'TWITCH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'twitch',
            brokers: [environment.KAFKA_URI],
          },
          consumer: {
            groupId: 'twitch-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [
    BotController
  ],
  providers: [],
})
export class TwitchModule {}
