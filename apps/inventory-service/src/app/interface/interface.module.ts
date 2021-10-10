import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CategoryController } from './controllers/category.controller';
import { LocationController } from './controllers/location.category';



@Module({
  imports: [
    CqrsModule,
  ],
  controllers: [
    CategoryController,
    LocationController
  ],
  exports: [],
})
export class InterfaceModule {}
