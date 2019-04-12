import { PostsService } from './../posts.service';
import { Post } from './../posts.model';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public PostsService:PostsService) { }

  ngOnInit() {
    this.posts =this.PostsService.getPosts();
    this.PostsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
//  posts = [
//    {title:"first title" , content:"first content"},
//    {title:"second title" , content:"second content"},
//    {title:"third title" , content:"third content"}
//  ]

}
