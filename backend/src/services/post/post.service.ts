import { Injectable } from '@nestjs/common';
import { Publication } from 'src/entities/publication';
import { Comment } from 'src/entities/comment';

@Injectable()
export class PostService {

  public getPost(id: number) {
    const data = Publication.findOne(id);
    return data;
  }

  public getPosts() {
    return Publication.find();
  }

  public getCommentByPost(id : number) {
    return Comment.find({postId : id});
  }
}

