import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {
  posts: Post[];
  postTitle: string;
  postContent: string;
  idForNextPost: number;

  constructor() { }

  ngOnInit(): void {
    this.postTitle = '';
    this.postContent = '';
    this.posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere optio reprehenderit",
        "body": "quia et suscipit"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem",
        "body": "et iusto sed quo iure"
      },
    ]
    this.idForNextPost = this.posts.length + 1;
  }

  addPost():void {
if(this.postTitle.trim().length === 0 || this.postContent.trim().length === 0){
  return;
}
    this.posts.push({
      userId: 1,
      id: this.idForNextPost,
      title: this.postTitle,
      body: this.postContent
    })

    this.postTitle = '';
    this.postContent = '';
    this.idForNextPost++;
  }

  deletePost(id: number): void{
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
