import { Controller, Post, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from '@app/common';
import { Response } from 'express';
import { UserDocument } from './users/models/user.schema';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //UserGuard is a custom guard using for protecting routes from unauthorized access
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    //currentUser decorator is a custom decorator for getting the current user
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('login', user);
    await this.authService.login(user, response);
    response.send(user);
  }

  //JwtAuthGuard is a custom guard using for protecting routes from unauthorized access
  @UseGuards(JwtAuthGuard)
  //@MessagePattern('authenticate') is a custom decorator for getting the current user from the jwt token and it is used for protecting routes from unauthorized access
  //@MessagePattern work with microservices and it is used to send messages to the auth microservice
  @MessagePattern('authenticate')
  //@Payload() is a custom decorator for getting the current user from the jwt token and it is used for protecting routes from unauthorized access
  //in this case @Payload() is used to get the jwt token from the request object and then send it to the auth microservice for validation and then return the user object if the jwt token is valid
  async authenticate(@Payload() data: any) {
    console.log('fucking data', data);
    data.user.name = 'mother fucker';
    return data.user;
  }
}
