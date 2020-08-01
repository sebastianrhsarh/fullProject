import { Controller, Get, Post, Delete, Body, Param, Options } from '@nestjs/common';
import { PostService } from 'src/services/post/post.service';

@Controller('publications')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  public getPost(@Param('id') id: number) {
    return this.postService.getPost(id);
  }

  @Get()
  public getPosts() {
    return this.postService.getPosts();
  }

  @Get(':id/comments')
  public getCommentsByPost(@Param('id') id: number) {
    return this.postService.getCommentByPost(id);
  }

  @Options()
  public option() {
    return true;
  }
}
