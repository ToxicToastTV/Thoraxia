import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetCategoriesHandler } from './queries/handler/get-categories.handler';
import { GetCategoryHandler } from './queries/handler/get-category.handler';
import { DomainModule } from '../domain/domain.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';


const commands = [];
const events = [];
const queries = [
  GetCategoriesHandler,
  GetCategoryHandler
];

@Module({
  imports: [
    CqrsModule,
    DomainModule,
    InfrastructureModule,
  ],
  providers: [
    ...commands,
    ...events,
    ...queries
  ],
  exports: [
    ...commands,
    ...events,
    ...queries
  ],
})
export class ApplicationModule {}
