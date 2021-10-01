import { Controller, Get } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { InventoryPattern } from '@thoraxia/shared';
import { SingleCategory } from '../dtos/category.dto';

@Controller()
export class CategoryController extends BaseController {

  public constructor() {
    super(CategoryController.name);
  }

  @MessagePattern(InventoryPattern.LIST)
  listCategories(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    this.logRequest(context.getTopic(), payload);
    return [];
  }

  @MessagePattern(InventoryPattern.SINGLE)
  singleCategory(@Payload('value') payload: SingleCategory, @Ctx() context: KafkaContext) {
    this.logRequest(context.getTopic(), payload);
    return {};
  }
}
