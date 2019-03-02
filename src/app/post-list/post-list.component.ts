import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Post from '../models/post';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsSubscription = this.postsService.postsSubject.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postsService.emitPostSubject();
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

  removePost(id) {
    this.postsService.removePost(+id);
  }

  loveIts(event) {
    this.postsService.setLoveIts(event.id, event.loveIts);
  }

}
