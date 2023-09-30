import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { AUTH_SERVICE, DatabaseModule, LoggerModule } from '@app/common';
import * as Joi from 'joi';
import { HotelDocument, HotelSchema } from './models/hotel.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HotelRepository } from './hotel.repository';
@Module({
  imports: [
    //import Database Module
    DatabaseModule,
    //create new Schema for the hotel document and registring in the current database connection
    DatabaseModule.forFeature([
      {
        name: HotelDocument.name,
        schema: HotelSchema,
      },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        AUTH_HOST: Joi.string().required(),
        AUTH_PORT: Joi.number().required(),
      }),
    }),
    //Client model is a class that is used for creating a microservice client
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        //useFactory is using to create new microservice client
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [HotelController],
  providers: [HotelService, HotelRepository],
})
export class HotelModule {}
