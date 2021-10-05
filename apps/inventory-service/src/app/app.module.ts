import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { InterfaceModule } from './interface/interface.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
    InterfaceModule
  ],
})
export class AppModule {}
