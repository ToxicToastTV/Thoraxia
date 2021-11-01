import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { environment } from '../../environments/environment';
import { SseController } from './sse.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'inventory',
            brokers: [environment.KAFKA_URI],
          },
          consumer: {
            groupId: 'inventory-consumer',
          },
        },
      },
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
  controllers: [SseController],
  providers: [],
})
export class SseModule {}
