import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  text: string;

  @Prop()
  userId: string;

  @Prop()
  postId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
