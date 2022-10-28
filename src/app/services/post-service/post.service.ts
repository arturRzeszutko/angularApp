import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postTitle: string = '';
  postContent: string = '';
  // idForNextPost: number = 0;
  posts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  addPost(postTitle, postContent):void {
    if(postTitle.trim().length === 0 || postContent.trim().length === 0){
    return;
  }
      this.posts.push({
        userId: 1,
        id: 1,
        title: postTitle,
        body: postContent
      })
    }
  
    deletePost(id: number): void{
      console.log(this.posts)
      this.posts = this.posts.filter(post => post.id !== id)
      console.log(this.posts)
    }
}
