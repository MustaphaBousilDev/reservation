import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

//versionKey: false is used to remove the version key from the document (version key is used for optimistic locking for exemple when we want to update a document, we need to specify the version of the document that we want to update)
@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  roles?: string[];
}

//ReservationSchema is used to create a new schema for the reservation document
export const UserSchema = SchemaFactory.createForClass(UserDocument);
