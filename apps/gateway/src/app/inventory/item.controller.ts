import { Controller, Get, Inject, Logger, OnModuleInit, Param, UseGuards } from '@nestjs/common';
import { InventoryGuard } from './inventory.guard';
import { ClientKafka } from '@nestjs/microservices';
import { Roles } from './inventory.decorator';
import { BaseRoles } from '@thoraxia/shared';

@Controller('inventory/item')
@UseGuards(InventoryGuard)
export class ItemController implements OnModuleInit {

  public constructor(
    @Inject('INVENTORY_SERVICE')
    private readonly client: ClientKafka
  ) {}

  async onModuleInit(): Promise<void> {
    // await this.client.connect();
  }

  @Get('health')
  public async getHealth(): Promise<any> {
    Logger.debug('UNKNOWNPATTERN.HEALTH');
    return null;
  }

  @Get()
  @Roles(BaseRoles.ACCESS)
  public async getItems(): Promise<any> {
    return [];
  }

  @Get(':id')
  @Roles(BaseRoles.ACCESS)
  public async getItem(@Param('id') id: string): Promise<any> {
    return [];
  }

  @Get(':id/category')
  @Roles(BaseRoles.ACCESS)
  public async getItemByCategory(@Param('id') id: string): Promise<any> {
    return [];
  }

  @Get(':id/company')
  @Roles(BaseRoles.ACCESS)
  public async getItemByCompany(@Param('id') id: string): Promise<any> {
    return [];
  }

  @Get(':id/location')
  @Roles(BaseRoles.ACCESS)
  public async getItemByLocation(@Param('id') id: string): Promise<any> {
    return [];
  }

  @Get(':id/type')
  @Roles(BaseRoles.ACCESS)
  public async getItemByType(@Param('id') id: string): Promise<any> {
    return [];
  }

  @Get(':id/size')
  @Roles(BaseRoles.ACCESS)
  public async getItemBySize(@Param('id') id: string): Promise<any> {
    return [];
  }
}
