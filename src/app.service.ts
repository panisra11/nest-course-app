import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'love pc';
  }
  getName(): string {
    return 'Panisra';
  }
  // getJson() {
  //   return {
  //     name: 'Panisra',
  //     lastname: 'Kasuk',
  //     age: 19,
  //   };
  // }

  getGitandGithup() {
    return 'Git and Githup using';
  }
  getPostman() {
    return 'we use postman';
  }
}
