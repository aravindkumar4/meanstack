import { PostsService } from './../posts.service';
import { Post } from './../posts.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public PostsService:PostsService) { }

  ngOnInit() {
  }
  enteredContent='';
  enteredTitle='';
  
 
  onAddPost(form: NgForm) {
    if(form.invalid)
    {
      return;
    }
    const post: Post ={
      title:form.value.title,
      content:form.value.content
    };
    this.PostsService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }

}
