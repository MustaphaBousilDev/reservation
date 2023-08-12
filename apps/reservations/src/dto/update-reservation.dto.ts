import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';

//PartialType is used to make all the properties of the CreateReservationDto optional
export class UpdateReservationDto extends PartialType(CreateReservationDto) {}
