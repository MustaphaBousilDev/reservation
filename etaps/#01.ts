/**
 * #01::nest generate library common
 * #02::npm i @nestjs/mongoose mongoose
 * #03::npm i @nestjs/config
 * #05::nest generate module database  -p common
 * #06::delete files common.module.ts , common.service.ts , common.controller.ts from folder libs/common/src
 * #07::nest generate module config  -p common
 * #08:: go to folder common/src/config 
 * <----------->
    *  import { Module } from '@nestjs/common';
        import { ConfigModule as NestConfigModule } from '@nestjs/config';

        @Module({
        imports: [NestConfigModule.forRoot()],
        })
        export class ConfigModule {}
   <----------->
   #09::npm run start:dev
   #10::nest g app reservations
   #11::nest g resource reservations
   #12::nest g module logger
   -->choose common

   #13::nest g app auth
   #14::nest g module users
   -->choose auth
    #15::nest g controller users
    -->choose auth
    #16::nest g service users
    -->choose auth
 */
