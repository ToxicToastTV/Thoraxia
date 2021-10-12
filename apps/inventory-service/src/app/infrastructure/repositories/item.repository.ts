import { EntityRepository, getRepository } from 'typeorm';
import { ItemEntity } from '../entities/item.entity';
import { BaseRepository, Nullable } from '@thoraxia/shared';
import { ItemDomain } from '../../domain/aggregates/item.domain';
import { ItemMapper } from '../mappers/item.mapper';
import { environment } from '../../../environments/environment';

@EntityRepository(ItemEntity)
export class ItemRepository implements BaseRepository<ItemDomain> {

  constructor(private readonly mapper: ItemMapper) {}

  public async save(domain: ItemDomain): Promise<void> {
    const entity = this.mapper.domainToEntity(domain);
    await getRepository(ItemEntity).save(entity);
  }

  public async findList(): Promise<Nullable<ItemDomain[]>> {
    const entities = await getRepository(ItemEntity).find({
      withDeleted: environment.DATABASE_WITH_DELETED,
      order: {
        created_at: environment.DATABASE_DEFAULT_SORTING
      }
    });
    return entities.length ? entities.map((entity: ItemEntity) => this.mapper.entityToDomain(entity)) : null;
  }

  public async findById(id: string): Promise<Nullable<ItemDomain>> {
    const entity = await getRepository(ItemEntity).findOne({
      id
    }, {
      withDeleted: environment.DATABASE_WITH_DELETED,
    });
    return entity ? this.mapper.entityToDomain(entity) : null;
  }

  public async findByTitle(title: string): Promise<Nullable<ItemDomain>> {
    const entity = await getRepository(ItemEntity).findOne({
      title
    }, {
      withDeleted: environment.DATABASE_WITH_DELETED
    });
    return entity ? this.mapper.entityToDomain(entity) : null;
  }

  public async findBySlug(slug: string): Promise<Nullable<ItemDomain>> {
    const entity = await getRepository(ItemEntity).findOne({
      slug
    }, {
      withDeleted: environment.DATABASE_WITH_DELETED
    });
    return entity ? this.mapper.entityToDomain(entity) : null;
  }

  public async findByCategoryId(category_id: string): Promise<Nullable<ItemDomain[]>> {
    const entities = await getRepository(ItemEntity).find({
      withDeleted: environment.DATABASE_WITH_DELETED,
      order: {
        created_at: environment.DATABASE_DEFAULT_SORTING
      },
      where: {
        category_id
      }
    });
    return entities.length ? entities.map((entity: ItemEntity) => this.mapper.entityToDomain(entity)) : null;
  }

  public async findByLocationId(location_id: string): Promise<Nullable<ItemDomain[]>> {
    const entities = await getRepository(ItemEntity).find({
      withDeleted: environment.DATABASE_WITH_DELETED,
      order: {
        created_at: environment.DATABASE_DEFAULT_SORTING
      },
      where: {
        location_id
      }
    });
    return entities.length ? entities.map((entity: ItemEntity) => this.mapper.entityToDomain(entity)) : null;
  }

  public async findByCompanyId(company_id: string): Promise<Nullable<ItemDomain[]>> {
    const entities = await getRepository(ItemEntity).find({
      withDeleted: environment.DATABASE_WITH_DELETED,
      order: {
        created_at: environment.DATABASE_DEFAULT_SORTING
      },
      where: {
        company_id
      }
    });
    return entities.length ? entities.map((entity: ItemEntity) => this.mapper.entityToDomain(entity)) : null;
  }

  public async findByTypeId(type_id: string): Promise<Nullable<ItemDomain[]>> {
    const entities = await getRepository(ItemEntity).find({
      withDeleted: environment.DATABASE_WITH_DELETED,
      order: {
        created_at: environment.DATABASE_DEFAULT_SORTING
      },
      where: {
        type_id
      }
    });
    return entities.length ? entities.map((entity: ItemEntity) => this.mapper.entityToDomain(entity)) : null;
  }

  public async findBySizeId(size_id: string): Promise<Nullable<ItemDomain[]>> {
    const entities = await getRepository(ItemEntity).find({
      withDeleted: environment.DATABASE_WITH_DELETED,
      order: {
        created_at: environment.DATABASE_DEFAULT_SORTING
      },
      where: {
        size_id
      }
    });
    return entities.length ? entities.map((entity: ItemEntity) => this.mapper.entityToDomain(entity)) : null;
  }

}
