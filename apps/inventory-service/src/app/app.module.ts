import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { InterfaceModule } from './interface/interface.module';

@Module({
  imports: [
    ApplicationModule,
    InterfaceModule
  ],
})
export class AppModule {}
