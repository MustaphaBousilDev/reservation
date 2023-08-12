import { Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configeService: ConfigService) => ({
        uri: configeService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  //forFeature is used to register a model in the current database connection
  //models is an array of ModelDefinition using for registering models in the current database connection
  static forFeature(models: ModelDefinition[]) {
    //mongooseModule.forFeature is used to register a model in the current database connection
    return MongooseModule.forFeature(models);
  }
}
