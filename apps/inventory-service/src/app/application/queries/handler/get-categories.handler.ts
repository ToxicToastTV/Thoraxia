import { Logger } from '@nestjs/common';
import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../impl/get-categories.query';

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesQuery> {

  // TODO: Add Factory and Repository
  constructor(
    private readonly eventPublisher: EventPublisher
  ) { }

  public async execute(query: GetCategoriesQuery): Promise<any> {
    try {
      return [];
    } catch (e) {
      Logger.error(e);
      return [];
    }
  }

}
