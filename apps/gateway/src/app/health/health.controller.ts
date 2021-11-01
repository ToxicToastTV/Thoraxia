import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {

  public constructor(
    private readonly health: HealthCheckService,
    private readonly  http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('ToxicToast.de', 'https://www.toxictoast.de'),
      () => this.http.pingCheck('Inventory - Category Microservice', 'http://localhost:3333/api/inventory/category/health'),
      () => this.http.pingCheck('Inventory - Item Microservice', 'http://localhost:3333/api/inventory/item/health'),
      () => this.http.pingCheck('Inventory - Company Microservice', 'http://localhost:3333/api/inventory/company/health'),
      () => this.http.pingCheck('Inventory - Location Microservice', 'http://localhost:3333/api/inventory/location/health'),
      () => this.http.pingCheck('Inventory - Type Microservice', 'http://localhost:3333/api/inventory/type/health'),
      () => this.http.pingCheck('Inventory - Size Microservice', 'http://localhost:3333/api/inventory/size/health'),
      () => this.http.pingCheck('Twitch - Message Microservice', 'http://localhost:3333/api/twitch/message/health'),
    ]);
  }

}
