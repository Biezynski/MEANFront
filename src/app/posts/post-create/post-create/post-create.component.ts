import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postHeader = '';
  postContent = '';
  @Output() outPosts = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = { title: form.value.title, content: form.value.content };
    this.outPosts.emit(post);
  }

  constructor() { }

  ngOnInit() {
  }

}
