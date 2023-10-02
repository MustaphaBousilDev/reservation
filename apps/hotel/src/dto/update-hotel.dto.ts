import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelDto } from './create-hotel.dto';

//PartialType is used to make all the properties of the CreateReservationDto optional
export class UpdateHotelDto extends PartialType(CreateHotelDto) {}
