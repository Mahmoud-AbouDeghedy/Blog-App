import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: number;

  @Prop()
  postsIds: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
