import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Controller('location')
export class LocationController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {  }

}
