import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}
  async findAll() {
    return this.hotelRepository.find({});
  }

  async create(createHotelDto: CreateHotelDto) {
    return this.hotelRepository.create(createHotelDto);
  }
}
