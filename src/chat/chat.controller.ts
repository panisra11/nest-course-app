import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly utilityservice: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/shared')
  chatFunc(): string {
    return this.utilityservice.chatFunc();
  }

  @Get('/global') 
  globaFunc():string{
      return this.globalHelperService.globalFunc();
  }
}
