import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post-service/post.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
  providers: [PostService]
})
export class PostContainerComponent implements OnInit {
  postTitle: string;
  postContent: string;
  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postTitle = '';
    this.postContent = '';
  }

  public getPosts() {
    return this.postService.posts;
  }
  
  addPost():void {
    if(this.postTitle.trim().length === 0){
    return;
  }
    this.postService.addPost(this.postTitle, this.postContent)
    this.postService.postTitle = '';
    this.postService.postContent = '';
  }

  deletePost(id: number): void{
    console.log(this.posts)
    this.postService.deletePost(id)
  }
}
