import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(private readonly utilityservice: UtilityService,
  private readonly globalHelperService: GlobalHelperService
){}

  @Get('/shared')
  UserFunc(): string {
    return this.utilityservice.UserFunc();
  }
    @Get('/global') 
  globaFunc():string{
      return this.globalHelperService.globalFunc();
  }
}
