import { Controller, Logger } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryPatterns } from '@thoraxia/shared';
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

  @MessagePattern(CategoryPatterns.LIST)
  async listCategories(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    try {
      Logger.debug(context.getTopic())
      return await this.queryBus.execute(new GetCategoriesQuery());
    } catch (e) {
      return {
        error: {
          status: e.status,
          message: e.message,
        }
      }
    }
  }

  @MessagePattern(CategoryPatterns.SINGLE)
  async singleCategory(@Payload('value') payload: SingleCategory, @Ctx() context: KafkaContext) {
    try {
      Logger.debug(context.getTopic())
      return await this.queryBus.execute(new GetCategoryQuery(payload.id));
    } catch (e) {
      /*throw new RpcException({
        status: e.status,
        message: e.message,
      });*/
      return {
        error: {
          status: e.status,
          message: e.message,
        }
      }
    }
  }

  @MessagePattern(CategoryPatterns.CREATE)
  async createCategory(@Payload('value') payload: CreateCategory, @Ctx() context: KafkaContext) {
    Logger.debug(context.getTopic())
    // return this.onCommand('', payload);
  }
}
