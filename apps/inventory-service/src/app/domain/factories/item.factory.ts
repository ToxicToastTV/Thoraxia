import { Injectable } from '@nestjs/common';
import { BaseFactory } from '@thoraxia/shared';
import { ItemDomain } from '../aggregates/item.domain';
import { CreateItem, ItemModel } from '../models/item.model';

@Injectable()
export class ItemFactory implements BaseFactory<ItemModel, ItemDomain, CreateItem> {

  public reconstitute(anemic: ItemModel): ItemDomain {
    const { id, category_id, location_id, company_id, type_id, size_id, title, slug, quantity, minSku, maxSku, active, created_at, updated_at, deleted_at } = anemic;
    return new ItemDomain(id, category_id, location_id, company_id, type_id, size_id, title, slug, quantity, minSku, maxSku, active, created_at, updated_at, deleted_at);
  }

  public constitute(domain: ItemDomain): ItemModel {
    return domain.toAnemic();
  }

  public createFactory(data: CreateItem): ItemDomain {
    const { id, title, slug } = data;
    const domain = new ItemDomain(id, null, null, null, null, null, title, slug, null, null, null, false, new Date(), null, null );
    domain.createItem();
    return domain;
  }

}
