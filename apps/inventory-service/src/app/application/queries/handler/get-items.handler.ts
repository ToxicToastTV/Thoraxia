import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetItemsQuery } from '../impl/get-items.query';
import { ItemFactory } from '../../../domain/factories/item.factory';
import { ItemRepository } from '../../../infrastructure/repositories/item.repository';
import { ItemModel } from '../../../domain/models/item.model';
import { ItemDomain } from '../../../domain/aggregates/item.domain';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetItemsQuery)
export class GetItemsHandler implements IQueryHandler<GetItemsQuery> {

  constructor(
    private readonly eventPublisher: EventPublisher,
    private readonly factory: ItemFactory,
    private readonly repository: ItemRepository,
  ) { }

  public async execute(query: GetItemsQuery): Promise<Array<ItemModel>> {
    const data = await this.repository.findList();
    if (data !== null) {
      return data.map((item: ItemDomain) => item.toAnemic());
    } else {
      throw new NotFoundException('No entities found');
    }
  }
}
