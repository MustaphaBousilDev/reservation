import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { JwtAuthGuard } from '@app/common';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.hotelService.findAll();
  }

  //@UseGuards(JwtAuthGuard)
  @Post()
  async createHotel(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }
}
