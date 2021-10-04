import { Controller, Get, Logger } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { InventoryPattern } from '@thoraxia/shared';
import { CreateCategory, SingleCategory } from '../dtos/category.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../../application/queries/impl/get-categories.query';
import { GetCategoryQuery } from '../../application/queries/impl/get-category.query';

@Controller()
export class CategoryController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {  }

  @MessagePattern(InventoryPattern.LIST)
  listCategories(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    try {
      return this.queryBus.execute(new GetCategoriesQuery()) || [];
    } catch (e) {
      Logger.error(e);
      return [];
    }
  }

  @MessagePattern(InventoryPattern.SINGLE)
  singleCategory(@Payload('value') payload: SingleCategory, @Ctx() context: KafkaContext) {
    try {
      return this.queryBus.execute(new GetCategoryQuery(payload.id)) || {};
    } catch (e) {
      Logger.error(e);
      return {};
    }
  }

  @MessagePattern(InventoryPattern.CREATE)
  createCategory(@Payload('value') payload: CreateCategory, @Ctx() context: KafkaContext) {
    // return this.onCommand('', payload);
  }
}
