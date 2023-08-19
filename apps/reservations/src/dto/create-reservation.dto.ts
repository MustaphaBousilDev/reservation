import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { CreateChargeDto } from '@app/common';

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date) //this is used to convert the string to date
  startDate: Date;

  @Type(() => Date)
  @IsDate()
  endDate: Date;

  userId: string;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto;
}
