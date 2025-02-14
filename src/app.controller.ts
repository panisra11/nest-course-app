import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('showName')
  getName(): string {
    return this.appService.getName();
  }
  // @Get('/showjson')
  // getJson() {
  //   return this.appService.getJson();
  // }

  @Get('/showGit')
  getGitandGithup() {
    return this.appService.getGitandGithup();
}

}