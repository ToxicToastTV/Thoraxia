import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { HealthModule } from './health/health.module';
import { TwitchModule } from './twitch/twitch.module';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [
    HealthModule,
    SseModule,
    InventoryModule,
    TwitchModule
  ],
})
export class AppModule {}
