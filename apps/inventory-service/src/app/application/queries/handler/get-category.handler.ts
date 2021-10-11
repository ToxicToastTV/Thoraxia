import { Logger, NotFoundException } from '@nestjs/common';
import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoryQuery } from '../impl/get-category.query';
import { CategoryFactory } from '../../../domain/factories/category.factory';
import { CategoryRepository } from '../../../infrastructure/repositories/category.repository';
import { CategoryModel } from '../../../domain/models/category.model';
import { CategoryDomain } from '../../../domain/aggregates/category.domain';

@QueryHandler(GetCategoryQuery)
export class GetCategoryHandler implements IQueryHandler<GetCategoryQuery> {

  constructor(
    private readonly eventPublisher: EventPublisher,
    private readonly factory: CategoryFactory,
    private readonly repository: CategoryRepository,
  ) { }

  public async execute(query: GetCategoryQuery): Promise<CategoryModel> {
    const { id } = query;
    const data = await this.repository.findById(id);
    if (data !== null) {
      return data.toAnemic();
    } else {
      throw new NotFoundException('Entity not found');
    }
  }

}
