import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'love pc';
  }
  getName(): string {
    return 'Opor';
  }
  getJson() {
    return {
      name: 'Panisra',
      lastname: 'Kasuk',
      age: 19,
    };
  }
}
