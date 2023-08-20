import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
//PassportStrategy is a class that we can extend to create a new strategy
//Strategy is a class that we can use to create a new strategy
//the class parent is Strategy
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    //super is used to call the constructor of the parent class
    //we are passing an object to the super class to tell it that we are using email as the username
    //super class his name is Strategy
    //the class parent here is PassportStrategy
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    try {
      console.log('fucking local straateg function validate');
      return await this.usersService.verifyUser(email, password);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
