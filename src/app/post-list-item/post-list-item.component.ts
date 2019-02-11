import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import Post from '../models/post';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  increase(byCount: number) {
    this.post.loveIts += byCount;
  }

}
