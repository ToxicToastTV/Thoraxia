/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';

import { AppModule } from './app/app.module';
import { ExceptionFilter } from './app/app.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  //
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  // app.useGlobalFilters(new ExceptionFilter());
  // app.use(compression());
  //
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
