import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class HotelDocument extends AbstractDocument {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  website: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  logo: string;
  @Prop({ required: true })
  latitude: string;
  @Prop({ required: true })
  longitude: string;
  @Prop({ required: true })
  roomsPassword: string;
  @Prop({ required: true })
  userId: string;
  @Prop({ required: true })
  timestamp: Date;
}

export const HotelSchema = SchemaFactory.createForClass(HotelDocument);
