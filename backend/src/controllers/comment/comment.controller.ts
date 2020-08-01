import { Controller, Get, Post, Delete, Body, Param, Options } from '@nestjs/common';
import { CommentService } from 'src/services/comment/comment.service';
import { Comment } from 'src/entities/comment';

@Controller('comments')
export class CommentController {
  constructor (private readonly commentService: CommentService) {}

  @Get(':id')
  public getComment(@Param('id') id: number) {
    return this.commentService.getComment(id);
  }

  @Get()
  public getComments() {
    return this.commentService.getComments();
  }

  @Post()
  public createComment(
    @Body('postId') postId: number,
    @Body('name') name: number,
    @Body('email') email: number,
    @Body('body') body: number
  ) {
    const comment = new Comment(
      {
        postId,
        name,
        email,
        body
      }
    )
    return this.commentService.createComment(comment);
  }

  @Delete(':id')
  public deleteComment(@Param('id') id: number) {
    return this.commentService.deleteComment(id);
  }

  @Options()
  public option() {
    return true;
  }

  @Options(':id')
  public optionById() {
    return true;
  }
}
