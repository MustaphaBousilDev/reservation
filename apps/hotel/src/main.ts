import { NestFactory } from '@nestjs/core';
import { HotelModule } from './hotel.module';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(HotelModule);
  const configService = app.get(ConfigService);
  const USER = configService.get<string>('RABBITMQ_USER');
  const PASSWORD = configService.get<string>('RABBITMQ_PASS');
  const HOST = configService.get<string>('RABBITMQ_HOST');
  const QUEUE = configService.get<string>('RABBITMQ_AUTH_QUEUE');
  app.connectMicroservice({
    transport: Transport.RMQ,
    /*options: {
      host: '0.0.0.0',
      port: configService.get('PORT'),
    },*/
    options: {
      //urls is an array of strings that represents the RabbitMQ connection URLs
      urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
      //queue name for the microservice to listen to the messages from the queue and process them accordingly
      noAck: false, //if set to true, the broker will not expect an acknowledgement of messages delivered to this consumer
      queue: QUEUE,
      //durable is set to false, which means that the queue will be deleted when the broker restarts
      queueOptions: {
        durable: true,
      },
    },
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
