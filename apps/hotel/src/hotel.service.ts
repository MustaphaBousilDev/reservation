import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UserDto } from '@app/common';
import { UpdateHotelDto } from './dto/update-hotel.dto';

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

  async findOne(_id: string) {
    return this.hotelRepository.findOne({ _id });
  }

  async update(_id: string, updateHotelDto: UpdateHotelDto) {
    return this.hotelRepository.findOneAndUpdate(
      { _id },
      { $set: updateHotelDto },
    );
  }

  async remove(_id: string) {
    return this.hotelRepository.findOneAndDelete({ _id });
  }
}
