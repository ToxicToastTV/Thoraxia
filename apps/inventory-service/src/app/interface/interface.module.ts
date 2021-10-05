import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CqrsModule } from '@nestjs/cqrs';



@Module({
  imports: [
    CqrsModule,
  ],
  controllers: [
    CategoryController,
  ],
  exports: [],
})
export class InterfaceModule {}
