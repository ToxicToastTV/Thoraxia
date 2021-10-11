import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Controller('item')
export class ItemController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {  }

}
