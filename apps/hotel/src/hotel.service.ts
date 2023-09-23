import { Injectable } from '@nestjs/common';

@Injectable()
export class HotelService {
  getHello(): string {
    return 'Hello World!';
  }
}
