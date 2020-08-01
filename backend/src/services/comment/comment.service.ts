import { Injectable } from '@nestjs/common';
import { Comment } from 'src/entities/comment';

@Injectable()
export class CommentService {

  public getComment(id: number) {
    const data = Comment.findOne(id);
    return data;
  }

  public getComments() {
    return Comment.find();
  }

  public async createComment(comment: Comment) {
    comment = await Comment.save(comment);
    return comment;
  }

  public deleteComment(id: number) {
    return Comment.delete(id);
  }
}
