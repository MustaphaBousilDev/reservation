import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { ReservationDocument } from './models/reservation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
    //logger is used for logging and in other words, we can say that it is used for debugging
    //ReservationsRepository.name is used to get the name of the class
  protected readonly logger=new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>,
  ) {
    //calling the constructor of the AbstractRepository class with the help of super()
    super(reservationModel);
  }


}