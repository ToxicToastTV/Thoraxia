import { Controller, Get, HttpException, Inject, Logger, OnModuleInit, Param, UseGuards } from '@nestjs/common';
import { InventoryGuard } from './inventory.guard';
import { ClientKafka } from '@nestjs/microservices';
import { Roles } from './inventory.decorator';
import { BaseRoles, CompanyPatterns, ItemPatterns } from '@thoraxia/shared';

@Controller('inventory/item')
@UseGuards(InventoryGuard)
export class ItemController implements OnModuleInit {

  public constructor(
    @Inject('INVENTORY_SERVICE')
    private readonly client: ClientKafka
  ) {}

  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf(ItemPatterns.LIST);
    this.client.subscribeToResponseOf(ItemPatterns.SINGLE);
    this.client.subscribeToResponseOf(ItemPatterns.HEALTH);
    this.client.subscribeToResponseOf(ItemPatterns.CATEGORY);
    this.client.subscribeToResponseOf(ItemPatterns.COMPANY);
    await this.client.connect();
  }

  @Get('health')
  public async getHealth(): Promise<any> {
    Logger.debug(ItemPatterns.HEALTH);
    return await this.client
      .send(ItemPatterns.HEALTH, {})
      .toPromise()
      .catch((error) => {
        Logger.error(error);
      })
      .then((data) => {
        return data;
      });
  }

  @Get()
  @Roles(BaseRoles.ACCESS)
  public async getItems(): Promise<any> {
    Logger.debug(ItemPatterns.LIST);
    return await this.client
      .send(ItemPatterns.LIST, {})
      .toPromise()
      .catch((error) => {
        Logger.error(error);
      })
      .then((data) => {
        if ('error' in data) {
          const status = data?.error?.status || 500;
          const message = data?.error?.message || '';
          throw new HttpException(message, status);
        }
        return data;
      });
  }

  @Get(':id')
  @Roles(BaseRoles.ACCESS)
  public async getItem(@Param('id') id: string): Promise<any> {
    Logger.debug(ItemPatterns.SINGLE);
    return await this.client
      .send(ItemPatterns.SINGLE, {})
      .toPromise()
      .catch((error) => {
        Logger.error(error);
      })
      .then((data) => {
        if ('error' in data) {
          const status = data?.error?.status || 500;
          const message = data?.error?.message || '';
          throw new HttpException(message, status);
        }
        return data;
      });
  }

  @Get(':id/category')
  @Roles(BaseRoles.ACCESS)
  public async getItemByCategory(@Param('id') id: string): Promise<any> {
    Logger.debug(ItemPatterns.CATEGORY);
    return await this.client
      .send(ItemPatterns.CATEGORY, {})
      .toPromise()
      .catch((error) => {
        Logger.error(error);
      })
      .then((data) => {
        if ('error' in data) {
          const status = data?.error?.status || 500;
          const message = data?.error?.message || '';
          throw new HttpException(message, status);
        }
        return data;
      });
  }

  @Get(':id/company')
  @Roles(BaseRoles.ACCESS)
  public async getItemByCompany(@Param('id') id: string): Promise<any> {
    Logger.debug(ItemPatterns.COMPANY);
    return await this.client
      .send(ItemPatterns.COMPANY, {})
      .toPromise()
      .catch((error) => {
        Logger.error(error);
      })
      .then((data) => {
        if ('error' in data) {
          const status = data?.error?.status || 500;
          const message = data?.error?.message || '';
          throw new HttpException(message, status);
        }
        return data;
      });
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
