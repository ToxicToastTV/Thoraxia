import { Module } from '@nestjs/common';
import { CategoryController } from './interface/controllers/category.controller';

@Module({
  imports: [],
  controllers: [
    CategoryController,
  ],
  providers: [],
})
export class AppModule {}
