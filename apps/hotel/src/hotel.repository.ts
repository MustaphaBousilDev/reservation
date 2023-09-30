import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { HotelDocument } from './models/hotel.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HotelRepository extends AbstractRepository<HotelDocument> {
  //logger is used for logging and in other words, we can say that it is used for debugging
  //ReservationsRepository.name is used to get the name of the class
  protected readonly logger = new Logger(HotelRepository.name);

  constructor(
    @InjectModel(HotelDocument.name)
    hotelModel: Model<HotelDocument>,
  ) {
    //calling the constructor of the AbstractRepository class with the help of super()
    super(hotelModel);
  }
}
