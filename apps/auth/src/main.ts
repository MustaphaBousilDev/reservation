import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as cookiePardser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  //cookie parser middleware to parse cookies from request object and add them to req.cookies
  app.use(cookiePardser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
