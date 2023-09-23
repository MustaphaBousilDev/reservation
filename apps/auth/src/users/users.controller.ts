import { Controller, Post, Get, Body, UseGuards, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser, UserDocument } from '@app/common';
import { GetUserDto } from './dto/get-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  //@useGuards is a custom decorator for protecting routes from unauthorized access
  //JwtAuthGuard is a custom guard using for protecting routes from unauthorized access
  //currentUser decorator is a custom decorator for getting the current user
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserDocument) {
    //console.log('fuck realy from mother fucker');
    //console.log(user);
    return user;
  }

  @Get(':id')
  async getUserById(@Param('id') id: GetUserDto) {
    return this.usersService.getUser(id);
  }
}
