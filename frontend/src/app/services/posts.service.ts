import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../classes/post';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public uri = 'http://localhost:3000/publications';

  constructor(private http: HttpClient) { }

  public async getAllPosts(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      this.http.get(`${this.uri}`,{headers : this.getHeaders()}).subscribe((data: any) => {
        resolve(data.map(value =>  new Post(value)));
      });
    });
  }

  public async getPostByUser(userId: number): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      this.http.get(`${this.uri}/${userId}`).subscribe((data: any) => {
        resolve(data.map(value => new Post(value)));
      });
    });
  }

  public async getPostById(postId: number): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.http.get(`${this.uri}/${postId}`).subscribe((data: any) => {
        resolve(new Post(data));
      });
    });
  }

  public async getCommentByPost(postId: number): Promise<Comment[]> {
    return new Promise<Comment[]>((resolve, reject) => {
      this.http.get(`${this.uri}/${postId}/comments`).subscribe((data: any) => {
        resolve(data.map(value => new Comment(value)));
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
