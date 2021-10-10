import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    HealthModule,
    InventoryModule],
})
export class AppModule {}
