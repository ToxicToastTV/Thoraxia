import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { InventoryPattern } from '@thoraxia/shared';

@Controller('inventory/category')
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
  public async getCategories(): Promise<any> {
    return await this.client.send(InventoryPattern.LIST, {}).toPromise().catch(error => console.error(error));
  }

  @Get(':id')
  public async getCategory(@Param('id') id: string): Promise<any> {
    return await this.client.send(InventoryPattern.SINGLE, { id }).toPromise().catch(error => console.error(error));
  }
}
