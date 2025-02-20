import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('order')
export class OrderController {
  constructor(private readonly utilityservice: UtilityService,
    private readonly globalHelperService: GlobalHelperService
  ) {}
  

  @Get('/shared')
  OrderFunc(): string {
    return this.utilityservice.OrderFunc();
  }
  @Get('/global') 
    globaFunc():string{
        return this.globalHelperService.globalFunc();
    }
}
