import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { UserDocument, UserSchema } from './models/user.schema';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    //we use this code for importing the DatabaseModule
    DatabaseModule,
    //we use this code for creating a new schema for the reservation document and registering it in the current database connection
    DatabaseModule.forFeature([
      {
        name: UserDocument.name,
        schema: UserSchema,
      },
    ]),
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
