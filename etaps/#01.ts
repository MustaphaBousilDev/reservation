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
 */
