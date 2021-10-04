import { Logger } from '@nestjs/common';
import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoryQuery } from '../impl/get-category.query';

@QueryHandler(GetCategoryQuery)
export class GetCategoryHandler implements IQueryHandler<GetCategoryQuery> {

  // TODO: Add Factory and Repository
  constructor(
    private readonly eventPublisher: EventPublisher
  ) { }

  public async execute(query: GetCategoryQuery): Promise<any> {
    const { id } = query;
    try {
      return {
        id
      };
    } catch (e) {
      Logger.error(e);
      return [];
    }
  }

}
