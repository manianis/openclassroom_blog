import { Component, OnInit } from '@angular/core';
import Post from '../models/post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post = new Post();

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.postsService.addPost(this.post);
    this.router.navigate(['/']);
  }
}
