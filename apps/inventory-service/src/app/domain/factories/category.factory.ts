import { Injectable } from '@nestjs/common';
import { BaseFactory } from '@thoraxia/shared';
import { CategoryModel, CreateCategory } from '../models/category.model';
import { CategoryDomain } from '../aggregates/category.domain';

@Injectable()
export class CategoryFactory implements BaseFactory<CategoryModel, CategoryDomain, CreateCategory> {

  public reconstitute(anemic: CategoryModel): CategoryDomain {
    const { id, title, slug, active, created_at, updated_at, deleted_at } = anemic;
    return new CategoryDomain(id, title, slug, active, created_at, updated_at, deleted_at);
  }

  public constitute(domain: CategoryDomain): CategoryModel {
    return domain.toAnemic();
  }

  public createFactory(data: CreateCategory): CategoryDomain {
    const { id, title, slug } = data;
    const domain = new CategoryDomain(id, title, slug, false, new Date(), null, null);
    domain.createCategory();
    return domain;
  }

}
