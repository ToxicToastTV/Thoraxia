import { Module } from '@nestjs/common';
import { CategoryEntity } from './entities/category.entity';
import { CategoryMapper } from './mappers/category.mapper';
import { DomainModule } from '../domain/domain.module';
import { CategoryRepository } from './repositories/category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../../environments/environment';

const repositories = [
  CategoryRepository
];
const mappers = [
  CategoryMapper
];
const entities = [
  CategoryEntity
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
