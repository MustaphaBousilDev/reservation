import { Module } from '@nestjs/common';
import { LoggerModule as NestLoggerModule } from 'nestjs-pino';
@Module({
  //LoggerModule.forRoot() is used to configure the logger
  imports: [
    NestLoggerModule.forRoot({
      //pinoHttp is used to configure the logger for the HTTP requests and responses
      pinoHttp: {
        //transport is used to configure the destination of the logs
        transport: {
          //target is used to configure the destination of the logs and in this case, we are using pino-pretty
          target: 'pino-pretty',
          //options is used to configure the options for the destination
          options: {
            //singleLine is used to configure the logs to be printed in a single line
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class LoggerModule {}
