import { Injectable } from '@nestjs/common';
import { BaseMapper } from '@thoraxia/shared';
import { ItemDomain } from '../../domain/aggregates/item.domain';
import { ItemEntity } from '../entities/item.entity';
import { ItemFactory } from '../../domain/factories/item.factory';

@Injectable()
export class ItemMapper implements BaseMapper<ItemDomain, ItemEntity> {

  constructor(
    private readonly factory: ItemFactory
  ) { }

  public domainToEntity(domain: ItemDomain): ItemEntity {
    const { id, category_id, location_id, company_id, type_id, size_id, title, slug, quantity, minSku, maxSku, active, created_at, updated_at, deleted_at } = domain.toAnemic();
    const entity = new ItemEntity();
    entity.id = id;
    entity.category_id = category_id;
    entity.location_id = location_id;
    entity.company_id = company_id;
    entity.type_id = type_id;
    entity.size_id = size_id;
    entity.title = title;
    entity.slug = slug;
    entity.quantity = quantity;
    entity.minSku = minSku;
    entity.maxSku = maxSku;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }

  public entityToDomain(entity: ItemEntity): ItemDomain {
    const { id, category_id, location_id, company_id, type_id, size_id, title, slug, quantity, minSku, maxSku, active, created_at, updated_at, deleted_at } = entity;
    return this.factory.reconstitute({
      id,
      category_id,
      location_id,
      company_id,
      type_id,
      size_id,
      title,
      slug,
      quantity,
      minSku,
      maxSku,
      active,
      created_at,
      updated_at,
      deleted_at,
      isUpdated: !!updated_at,
      isDeleted: !!deleted_at,
    });
  }
}
