import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../../post.model';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {


  // posts = [
  //   { title: 'to jest pierwszy tytuł', content: 'to jest zawartość pierwszego posta' },
  //   { title: 'to jest drugi tytuł', content: 'to jest zawartość drugiego posta' },
  //   { title: 'to jest trzeci tytuł', content: 'to jest zawartość trzeciego posta' },
  // ];
  isLoading = false;
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostsService) { }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

}
