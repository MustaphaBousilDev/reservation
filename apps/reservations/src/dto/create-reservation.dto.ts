import { Type } from 'class-transformer';
import { IsDate, IsString, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date) //this is used to convert the string to date
  startDate: Date;
  @Type(() => Date)
  @IsDate()
  endDate: Date;
  userId: string;
  @IsString()
  @IsNotEmpty()
  placeId: string;
  @IsString()
  @IsNotEmpty()
  invoiceId: string;
}
