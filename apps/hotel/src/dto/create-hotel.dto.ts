import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  website: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  logo: string;
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitude: number;
  @IsString()
  @IsNotEmpty()
  rommsPassword: string;
  @IsString()
  user_id: string;
}
