import { AuthGuard } from '@nestjs/passport';
//AuthGuard('jwt') is a Passport strategy for authenticating with a JSON Web Token.
//This strategy will first verify that the JWT's signature is valid,
//and then invoke our validate() method passing the decoded token to it.
//If the token is valid, validate() must return an object that will be set on the request object as the user property.
//This user object is going to be injected into the controllers handlers.
//If the token is not valid, the request will be rejected with a 401 Unauthorized response.
//If you want to use another name for the property, you can override the options with the property name you want, like this:
// @UseGuards(AuthGuard('jwt'))
export class JwtAuthGuard extends AuthGuard('jwt') {}
