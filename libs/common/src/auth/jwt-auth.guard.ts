import { CanActivate, Injectable, Inject } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { AUTH_SERVICE } from '../constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from '../dto';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  //client proxy is used to send messages to the auth service in other words to send messages to the auth microservice
  //the auth microservice is the one that is responsible for validating the jwt
  //ClientProxy is a class that is provided by nestjs microservices package and it is used to send messages to other microservices in the system (in this case the auth microservice)
  //@Inject() is a decorator that is provided by nestjs common package and it is used to inject dependencies into the class
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}
  //can
  canActivate(
    //context is the request object
    //ExecutionContext is a class that is provided by nestjs common package and it is used to get the request object
    //Observables are used to handle asynchronous operations
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //jwt is stored in the cookie named Authentication in the browser and is sent to the server with every request to the server (see libs\common\src\auth\jwt.strategy.ts)
    //if the jwt is not present in the cookie then the user is not authenticated
    //context is the request object and we can get the cookie from it
    //switchToHttp() is a method that is provided by ExecutionContext class and it is used to get the request object
    //getRequest() is a method that is provided by the Request object and it is used to get the cookie
    const jwt = context.switchToHttp().getRequest().cookies?.Authentication; //jwt has the value of the cookie named Authentication
    if (!jwt) return false;

    //send messsage to auth service that matches the current pattern
    //the auth service is the one that is responsible for validating the jwt
    //ClientProxy is a class that is provided by nestjs microservices package and it is used to send messages to other microservices in the system (in this case the auth microservice)
    return this.authClient
      .send<UserDto>('authenticate', {
        Authentication: jwt,
        //pipe is a method that is provided by Observable class and it is used to handle asynchronous operations
      })
      .pipe(
        tap((res) => {
          console.log('fucking responsive');
          console.log(res);
          //res is the user object that is returned from the auth microservice if the jwt is valid and the user is authenticated
          //res has value of false if the jwt is not valid and the user is not authenticated oand if jwt is valid and the user is authenticated then res has the user object
          context.switchToHttp().getRequest().user = res; //set the user property of the request object to the user object that is returned from the auth microservice
        }),
        map(() => true),
        catchError(() => of(false)),
      );
  }
}
