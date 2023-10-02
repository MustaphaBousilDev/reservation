import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CurrentUser, JwtAuthGuard, Roles, UserDto } from '@app/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

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

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hotelService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHotelDto: UpdateHotelDto,
  ) {
    return this.hotelService.update(id, updateHotelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @Roles('Admin')
  async remove(@Param('id') id: string) {
    return this.hotelService.remove(id);
  }
}
