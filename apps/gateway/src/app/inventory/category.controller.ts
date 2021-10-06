import {
  Controller,
  Get,
  HttpException,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { BaseRoles, InventoryPattern } from '@thoraxia/shared';
import { Roles } from './inventory.decorator';
import { InventoryGuard } from './inventory.guard';

@Controller('inventory/category')
@UseGuards(InventoryGuard)
export class CategoryController implements OnModuleInit {
  public constructor(
    @Inject('INVENTORY_SERVICE')
    private readonly client: ClientKafka
  ) {}

  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf(InventoryPattern.LIST);
    this.client.subscribeToResponseOf(InventoryPattern.SINGLE);
    await this.client.connect();
  }

  @Get()
  @Roles(BaseRoles.ACCESS)
  public async getCategories(): Promise<any> {
    Logger.debug(InventoryPattern.LIST);
    return await this.client
      .send(InventoryPattern.LIST, {})
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
  public async getCategory(@Param('id') id: string): Promise<any> {
    Logger.debug(InventoryPattern.SINGLE);
    return await this.client
      .send(InventoryPattern.SINGLE, { id })
      .toPromise()
      .catch((error) => {
        Logger.error(error);
      })
      .then((data) => {
        Logger.debug(data);
        return data;
      });
  }
}
