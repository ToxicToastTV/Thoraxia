import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../impl/get-categories.query';
import { CategoryFactory } from '../../../domain/factories/category.factory';
import { CategoryRepository } from '../../../infrastructure/repositories/category.repository';
import { CategoryModel } from '../../../domain/models/category.model';
import { CategoryDomain } from '../../../domain/aggregates/category.domain';
import { NotFoundException } from '@nestjs/common';


@QueryHandler(GetCategoriesQuery)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesQuery> {

  // TODO: Add Factory and Repository
  constructor(
    private readonly eventPublisher: EventPublisher,
    private readonly factory: CategoryFactory,
    private readonly repository: CategoryRepository,
  ) { }

  public async execute(query: GetCategoriesQuery): Promise<Array<CategoryModel>> {
    const data = await this.repository.findList();
    if (data !== null) {
      return data.map((item: CategoryDomain) => item.toAnemic());
    } else {
      throw new NotFoundException('No entities found');
    }
  }

}
