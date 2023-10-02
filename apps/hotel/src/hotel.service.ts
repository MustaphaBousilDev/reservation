import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UserDto } from '@app/common';

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}
  async findAll() {
    return this.hotelRepository.find({});
  }

  async create(createHotelDto: CreateHotelDto, { _id: userId }: UserDto) {
    return this.hotelRepository.create({
      ...createHotelDto,
      userId,
      timestamp: new Date(),
    });
  }
}
