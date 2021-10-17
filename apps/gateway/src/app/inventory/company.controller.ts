import { Controller, Get, HttpException, Inject, Logger, OnModuleInit, Param, UseGuards } from '@nestjs/common';
import { InventoryGuard } from './inventory.guard';
import { ClientKafka } from '@nestjs/microservices';
import { BaseRoles, CompanyPatterns, ItemPatterns } from '@thoraxia/shared';
import { Roles } from './inventory.decorator';

@Controller('inventory/company')
@UseGuards(InventoryGuard)
export class CompanyController implements OnModuleInit {

  public constructor(
    @Inject('INVENTORY_SERVICE')
    private readonly client: ClientKafka
  ) {}

  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf(CompanyPatterns.LIST);
    this.client.subscribeToResponseOf(CompanyPatterns.SINGLE);
    this.client.subscribeToResponseOf(CompanyPatterns.CREATE);
    this.client.subscribeToResponseOf(CompanyPatterns.HEALTH);
    await this.client.connect();
  }

  @Get('health')
  public async getHealth(): Promise<any> {
    Logger.debug(CompanyPatterns.HEALTH);
    return await this.client
      .send(CompanyPatterns.HEALTH, {})
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
  public async getCompanies(): Promise<any> {
    Logger.debug(CompanyPatterns.LIST);
    return await this.client
      .send(CompanyPatterns.LIST, {})
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
  public async getCompany(@Param('id') id: string): Promise<any> {
    Logger.debug(CompanyPatterns.SINGLE);
    return await this.client
      .send(CompanyPatterns.SINGLE, {})
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

}
