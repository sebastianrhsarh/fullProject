import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';
import { CommentController } from './controllers/comment/comment.controller';
import { CommentService } from './services/comment/comment.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    PostController,
    CommentController
  ],
  providers: [
    AppService,
    PostService,
    CommentService
  ],
})
export class AppModule {}
