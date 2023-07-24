import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostSchema } from './schemas/post.schema';
import { PostController } from './post/post.controller';
import { PostService } from './post.service';
import { CommentSchema } from './schemas/comment.schema';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const DB = process.env.MONGO_URI as string;

@Module({
  imports: [
    MongooseModule.forRoot(DB),
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
    MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
  ],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
