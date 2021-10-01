import { Logger } from '@nestjs/common';
import { Optional } from '@thoraxia/shared';

export class BaseController {

  private readonly logger: Logger = new Logger(BaseController.name);

  public constructor(
    private readonly controller: string
  ) {
    // Add Events
    // Add Commands
    // Add Queries
    // this.logger.setContext(this.controller);
    this.logger.debug(`[${this.controller}] Access constructor`);
  }

  public logRequest(route: string, payload: Optional<any>): void {
    this.logger.debug(`[${this.controller}] Access ${route}`);
    this.logger.debug(payload);
  }

}
