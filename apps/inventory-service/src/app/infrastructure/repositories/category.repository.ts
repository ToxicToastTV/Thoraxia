import { EntityRepository, getRepository } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { BaseRepository, Nullable } from '@thoraxia/shared';
import { CategoryDomain } from '../../domain/aggregates/category.domain';
import { CategoryMapper } from '../mappers/category.mapper';
import { environment } from '../../../environments/environment';

@EntityRepository(CategoryEntity)
export class CategoryRepository implements BaseRepository<CategoryDomain> {

  constructor(private readonly mapper: CategoryMapper) {}

  public async save(domain: CategoryDomain): Promise<void> {
    const entity = this.mapper.domainToEntity(domain);
    await getRepository(CategoryEntity).save(entity);
  }

  public async findList(): Promise<Nullable<CategoryDomain[]>> {
    const entities = await getRepository(CategoryEntity).find({
      withDeleted: environment.DATABASE_WITH_DELETED,
      order: {
        created_at: environment.DATABASE_DEFAULT_SORTING
      },
    });
    return entities.length ? entities.map((entity: CategoryEntity) => this.mapper.entityToDomain(entity)) : null;
  }

  public async findById(id: string): Promise<Nullable<CategoryDomain>> {
    const entity = await getRepository(CategoryEntity).findOne({
      id
    }, {
      withDeleted: environment.DATABASE_WITH_DELETED
    });
    return entity ? this.mapper.entityToDomain(entity) : null;
  }


  public async findByTitle(title: string): Promise<Nullable<CategoryDomain>> {
    const entity = await getRepository(CategoryEntity).findOne({
      title
    }, {
      withDeleted: environment.DATABASE_WITH_DELETED
    });
    return entity ? this.mapper.entityToDomain(entity) : null;
  }

  public async findBySlug(slug: string): Promise<Nullable<CategoryDomain>> {
    const entity = await getRepository(CategoryEntity).findOne({
      slug
    }, {
      withDeleted: environment.DATABASE_WITH_DELETED
    });
    return entity ? this.mapper.entityToDomain(entity) : null;
  }
}
