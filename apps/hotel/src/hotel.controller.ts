import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.hotelService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createHotel(
    @Body() createHotelDto: CreateHotelDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.hotelService.create(createHotelDto, user);
  }
}
