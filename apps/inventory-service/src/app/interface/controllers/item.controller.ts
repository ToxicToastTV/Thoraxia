import { Controller, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { ItemPatterns } from '@thoraxia/shared';
import { GetItemsQuery } from '../../application/queries/impl/get-items.query';

@Controller()
export class ItemController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {  }

  @MessagePattern(ItemPatterns.LIST)
  async listItems(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    try {
      Logger.debug(context.getTopic())
      return await this.queryBus.execute(new GetItemsQuery());
    } catch (e) {
      return {
        error: {
          status: e.status,
          message: e.message,
        }
      }
    }
  }

}
