import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { CompanyPatterns } from '@thoraxia/shared';

@Controller()
export class CompanyController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {  }


  @MessagePattern(CompanyPatterns.LIST)
  async getCompanies(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    return [];
  }

  @MessagePattern(CompanyPatterns.SINGLE)
  async getCompany(@Payload('value') payload: any, @Ctx() context: KafkaContext) {
    return {};
  }

}
