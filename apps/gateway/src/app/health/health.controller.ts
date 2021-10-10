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
      () => this.http.pingCheck('Inventory - Category Microservice', 'http://localhost:3333/api/inventory/category/health')
    ]);
  }

}
