/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
    export class ProductService {
    productFunc() : string{
    return 'Hello from product service';
    }
    
    productJson() {
        return {name:'Panisra',
            age: 19,
            hobbie: 'sleep'
        };
        }
}
