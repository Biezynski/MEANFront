import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postHeader = '';
  postContent = '';

  onAddPost() {
    const post = { title: this.postHeader, content: this.postContent };

  }

  constructor() { }

  ngOnInit() {
  }

}
