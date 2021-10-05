import { Module } from '@nestjs/common';
import { CategoryFactory } from './factories/category.factory';

const factories = [
  CategoryFactory,
];

@Module({
  providers: [...factories],
  exports: [...factories],
})
export class DomainModule {}
