import { AuthGuard } from '@nestjs/passport';

//AuthGuard is a NestJS class that implements CanActivate interface from @nestjs/common
//local is the name of the strategy we want to use (we can have multiple strategies)
//AuthGuard('local') is a class decorator that tells NestJS to use the local strategy
export class LocalAuthGuard extends AuthGuard('local') {}
