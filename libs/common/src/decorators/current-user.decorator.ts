import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '../../../../apps/auth/src/users/models/user.schema';

//
const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);

//explain this code word bt word
// import { createParamDecorator, ExecutionContext } from '@nestjs/common'; //createParamDecorator is a method that is provided by nestjs common package and it is used to create custom decorators
// import { UserDocument } from '../../../../apps/auth/src/users/models/user.schema'; //UserDocument is an interface that is provided by mongoose package and it is used to define the user document
// getCurrentUserByContext is a function that takes context as a parameter and it is used to get the current user from the request object (context is the request object)
// return context.switchToHttp().getRequest().user is used to get the current user from the request object
//switchToHttp() is a method that is provided by ExecutionContext class and it is used to get the request object
//getRequest() is a method that is provided by the Request object and it is used to get the current user
// user is the name of the property that we want to get from the request object

// export const CurrentUser = createParamDecorator( //createParamDecorator is a method that is provided by nestjs common package and it is used to create custom decorators
//   (_data: unknown, context: ExecutionContext) => //data is the data that we want to pass to the decorator and context is the request object
//     getCurrentUserByContext(context), //getCurrentUserByContext is a function that takes context as a parameter and it is used to get the current user from the request object (context is the request object)
