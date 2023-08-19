import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

//versionKey: false is used to remove the version key from the document (version key is used for optimistic locking for exemple when we want to update a document, we need to specify the version of the document that we want to update)
@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop({ required: true })
  timestamp: Date;
  @Prop({ required: true })
  startDate: Date;
  @Prop({ required: true })
  endDate: Date;
  @Prop({ required: true })
  userId: string;
  @Prop({ required: true })
  placeId: string;
  @Prop({ required: true })
  invoiceId: string;
}

//ReservationSchema is used to create a new schema for the reservation document
export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
