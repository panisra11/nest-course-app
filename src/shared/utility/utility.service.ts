import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  shareFunc(): string {
    return 'use shared module';
  }
  UserFunc(): string {
    return 'User Module';
  }
  OrderFunc(): string {
    return 'Order Module';
  }
  chatFunc(): string {
    return 'Chat Module';
  }
}
