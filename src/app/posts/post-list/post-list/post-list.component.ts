import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title: 'to jest pierwszy tytuł', content: 'to jest zawartość pierwszego posta' },
  //   { title: 'to jest drugi tytuł', content: 'to jest zawartość drugiego posta' },
  //   { title: 'to jest trzeci tytuł', content: 'to jest zawartość trzeciego posta' },
  // ];

  posts = [];


  constructor() { }

  ngOnInit() {
  }

}
