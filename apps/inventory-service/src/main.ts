/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { environment } from './environments/environment';

async function bootstrap() {
  try {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'inventory',
          brokers: [
            environment.KAFKA_URI
          ]
        },
        consumer: {
          groupId: 'inventory-consumer',
        }
      },
    });
    await app.listen();
  } catch (e) {
    console.error(e);
    throw e;
  }

}

bootstrap();
