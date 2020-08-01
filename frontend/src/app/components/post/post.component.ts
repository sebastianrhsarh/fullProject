import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/classes/post';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts: Post[];
  public userId: number;
  public users: User[] = [];

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.postsService.getAllPosts().then((data:Post[]) => {
      this.posts = data;
      this.getUserList();
    });
  }

  public postByUser() {
    if(this.userId == -1) {
      this.postsService.getAllPosts().then((data:Post[]) =>{
        this.posts = data;
      })
    } else {
      this.postsService.getPostByUser(Number(this.userId)).then((data:Post[])=> {
        this.posts = data;
      });
    }
  }

  public viewPost(post: any) {
    let postId;
    postId = post.id;
    this.router.navigate(['/posts',postId]);
  }

  public getUserList() {
    for(let post of this.posts) {
      const user = this.users.filter(user => {
        return user.id === post.userId;
      });

      if(user.length === 0) {
        const u = new User();
        u.id = post.userId;
        this.users.push(u);
      }
    }
  }
}
