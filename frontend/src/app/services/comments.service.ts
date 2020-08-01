import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  public uri = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  public async getAllComments(): Promise<Comment[]> {
    return new Promise<Comment[]>((resolve, reject) => {
      this.http.get(`${this.uri}`,{headers : this.getHeaders()}).subscribe((data: any) => {
        resolve(data.map(value =>  new Comment(value)));
      });
    });
  }

  public async createComment(comment: Comment): Promise<Comment> {
    return new Promise<Comment>((resolve, reject) => {
      this.http.post(this.uri, comment).subscribe((data: any) => {
        comment.id = data.id;
        resolve(comment);
      });
    });
  }

  public async deleteComment(commentId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${this.uri}/${commentId}`,{headers : this.getHeaders()}).subscribe((data: any) => {
        resolve();
      });
    });
  }

  private getHeaders() {
    const headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
    );
    return headers;
  }
}
