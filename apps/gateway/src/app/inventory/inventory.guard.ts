import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import * as jwksClient from 'jwks-rsa';
import { decode } from 'jsonwebtoken';
import { environment } from '../../environments/environment';

@Injectable()
export class InventoryGuard implements CanActivate {

  constructor(private reflector: Reflector) {}

  private encodeToken(bearerToken: string): any {
    const tokenArray = bearerToken.split(' ');
    const token = tokenArray[1];
    const decoded = decode(token);
    return decoded || null;
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string>('roles', context.getHandler());
    const bearerToken = context.switchToHttp().getRequest().headers?.authorization || 'Bearer ';
    const user = this.encodeToken(bearerToken);
    if (!roles) {
      return true;
    }
    if (user === null) {
      return false;
    }
    const userRoles = user['http://localhost:4200/roles'];
    return userRoles.includes(roles);
  }

}
