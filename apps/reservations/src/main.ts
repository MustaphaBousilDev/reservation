import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

//pino is a logger for Node.js applications and it is used to log the data in the console
async function bootstrap() {
  console.log('fuck you bitch');
  const app = await NestFactory.create(ReservationsModule);
  //ValidationPipe is used to validate the data that is coming from the client and if the data is not valid then it will throw an error
  //app.useGlobalPipes() is used to apply the ValidationPipe globally
  //whitelist is used to remove the extra data that is coming from the client in other words, we can say that it is used to remove the extra data that is not defined in the DTO(if send data not in DTO then it will not accept)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  //app.useLogger() is used to apply the logger globally
  //app.get(Logger) is used to get the instance of the Logger class
  app.useLogger(app.get(Logger));
  app.use(cookieParser());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
