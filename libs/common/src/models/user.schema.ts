import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

//versionKey: false is used to remove the version key from the document (version key is used for optimistic locking for exemple when we want to update a document, we need to specify the version of the document that we want to update)
@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop({
    required: true,
    minlength: 3,
    maxlength: 20,
  })
  //------------------------------------
  name: string;
  //------------------------------------
  @Prop({ required: true, unique: true })

  //--------------------------------------
  email: string;
  //--------------------------------------

  @Prop({
    required: true,
    minlength: 8,
  })
  //--------------------------------------
  password: string;
  //--------------------------------------

  @Prop({
    required: true,
    default: 1,
    validate: [isValidStatus, 'Invalid status value'],
  })
  //--------------------------------------
  status: number;
  //--------------------------------------

  @Prop({
    required: true,
    default:
      'https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg',
  })
  //--------------------------------------
  photo: string;
  //--------------------------------------

  @Prop({ default: [] })
  //--------------------------------------
  roles?: string[];
  //--------------------------------------

  @Prop({ default: 0 })
  //--------------------------------------
  email_verified: number;
  //--------------------------------------
}

function isValidStatus(value: number): boolean {
  return value === 0 || value === 1;
}
//ReservationSchema is used to create a new schema for the reservation document
export const UserSchema = SchemaFactory.createForClass(UserDocument);
