import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { environment } from '../../environments/environment';
import { InventoryGuard } from './inventory.guard';
import { ItemController } from './item.controller';
import { CompanyController } from './company.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'inventory',
            brokers: [environment.KAFKA_URI],
          },
          consumer: {
            groupId: 'inventory-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [
    CategoryController,
    ItemController,
    CompanyController,
  ],
  providers: [InventoryGuard],
})
export class InventoryModule {}
