import { Module } from '@nestjs/common';
import { CategoryFactory } from './factories/category.factory';
import { ItemFactory } from './factories/item.factory';

const factories = [
  CategoryFactory,
  ItemFactory
];

@Module({
  providers: [...factories],
  exports: [...factories],
})
export class DomainModule {}
