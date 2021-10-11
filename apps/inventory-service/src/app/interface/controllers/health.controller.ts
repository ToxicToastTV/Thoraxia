import { HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { Controller, Logger } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryPatterns, ItemPatterns } from '@thoraxia/shared';
import { SingleCategory } from '../dtos/category.dto';

@Controller()
export class HealthController {

  public constructor(
    private readonly health: HealthCheckService,
    private readonly db: TypeOrmHealthIndicator,
  ) { }

  @MessagePattern(CategoryPatterns.HEALTH)
  async checkCategoryHealth(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    Logger.debug(context.getTopic())
    return this.health.check([
      () => this.db.pingCheck('database'),
    ]);
  }

  @MessagePattern(ItemPatterns.HEALTH)
  async checkItemHealth(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    Logger.debug(context.getTopic())
    return this.health.check([
      () => this.db.pingCheck('database'),
    ]);
  }
}
