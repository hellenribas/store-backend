import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LoginDocument = HydratedDocument<Login>;

@Schema()
export class Login {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);
