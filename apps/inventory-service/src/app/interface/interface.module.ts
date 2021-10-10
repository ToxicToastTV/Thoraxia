import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CategoryController } from './controllers/category.controller';
import { LocationController } from './controllers/location.category';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './controllers/health.controller';



@Module({
  imports: [
    CqrsModule,
    TerminusModule,
    HttpModule,
  ],
  controllers: [
    CategoryController,
    LocationController,
    HealthController,
  ],
  exports: [],
})
export class InterfaceModule {}
