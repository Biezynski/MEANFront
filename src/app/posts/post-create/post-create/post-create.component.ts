import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postHeader = '';
  postContent = '';
  @Output() outPosts = new EventEmitter();

  onAddPost() {
    const post = { title: this.postHeader, content: this.postContent };
    this.outPosts.emit(post);
  }

  constructor() { }

  ngOnInit() {
  }

}
