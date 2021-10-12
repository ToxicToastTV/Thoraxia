import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../../environments/environment';
import { DomainModule } from '../domain/domain.module';
//
import { CategoryEntity } from './entities/category.entity';
import { ItemEntity } from './entities/item.entity';
//
import { CategoryMapper } from './mappers/category.mapper';
import { ItemMapper } from './mappers/item.mapper';
//
import { CategoryRepository } from './repositories/category.repository';
import { ItemRepository } from './repositories/item.repository';


const repositories = [
  CategoryRepository,
  ItemRepository
];
const mappers = [
  CategoryMapper,
  ItemMapper,
];
const entities = [
  CategoryEntity,
  ItemEntity
];

@Module({
  imports: [
    DomainModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: environment.DATABASE_URI,
      port: environment.DATABASE_PORT,
      username: environment.DATABASE_USERNAME,
      password: environment.DATABASE_PASSWORD,
      database: environment.DATABASE_NAME,
      entities,
      synchronize: true,
      retryAttempts: 3,
      retryDelay: 1000,
    })
  ],
  providers: [...entities, ...mappers, ...repositories],
  exports: [...entities, ...mappers, ...repositories],
})
export class InfrastructureModule {}
