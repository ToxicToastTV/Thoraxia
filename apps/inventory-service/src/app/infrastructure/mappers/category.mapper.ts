import { Injectable } from '@nestjs/common';
import { BaseMapper } from '@thoraxia/shared';
import { CategoryDomain } from '../../domain/aggregates/category.domain';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryFactory } from '../../domain/factories/category.factory';

@Injectable()
export class CategoryMapper implements BaseMapper<CategoryDomain, CategoryEntity> {

  constructor(
    private readonly factory: CategoryFactory
  ) { }

  public domainToEntity(domain: CategoryDomain): CategoryEntity {
    const { id, title, slug, active, created_at, updated_at, deleted_at } = domain.toAnemic();
    const entity = new CategoryEntity();
    entity.id = id;
    entity.title = title;
    entity.slug = slug;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }

  public entityToDomain(entity: CategoryEntity): CategoryDomain {
    const { id, title, slug, active, created_at, updated_at, deleted_at } = entity;
    return this.factory.reconstitute({
      id,
      title,
      slug,
      active,
      created_at,
      updated_at,
      deleted_at,
      isUpdated: !!updated_at,
      isDeleted: !!deleted_at,
    });
  }

}
