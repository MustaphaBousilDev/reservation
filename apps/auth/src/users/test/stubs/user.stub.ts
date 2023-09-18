import { ObjectId } from 'mongodb';

export interface UserDocument {
  _id: ObjectId;
  email: string;
  password: string;
}

export const userStub = (): UserDocument => {
  return {
    _id: new ObjectId('6140f5dc07c19a8f24b1b484'),
    email: 'mugiwa@gmail.com',
    password: 'mugiwara1032',
  };
};
