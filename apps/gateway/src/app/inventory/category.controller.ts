import { Controller, Get, Inject, OnModuleInit, Param, UseGuards } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { BaseRoles, InventoryPattern } from '@thoraxia/shared';
import { Roles } from './inventory.decorator';
import { InventoryGuard } from './inventory.guard';

@Controller('inventory/category')
@UseGuards(InventoryGuard)
export class CategoryController implements OnModuleInit {

  public constructor(
    @Inject('INVENTORY_SERVICE')
    private readonly client: ClientKafka
  ) { }

  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf(InventoryPattern.LIST);
    this.client.subscribeToResponseOf(InventoryPattern.SINGLE);
    await this.client.connect();
  }

  @Get()
  @Roles(BaseRoles.ACCESS)
  public async getCategories(): Promise<any> {
    return await this.client.send(InventoryPattern.LIST, {}).toPromise().catch(error => console.error(error));
  }

  @Get(':id')
  @Roles(BaseRoles.ACCESS)
  public async getCategory(@Param('id') id: string): Promise<any> {
    return await this.client.send(InventoryPattern.SINGLE, { id }).toPromise().catch(error => console.error(error));
  }
}
