import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Post from '../models/post';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Output() onRemove = new EventEmitter();
  @Output() onLoveIt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increase(byCount: number) {
    this.onLoveIt.emit({ id: this.post.id, loveIts: this.post.loveIts + byCount });
  }

  removeItem(id: number) {
    this.onRemove.emit('' + id);
  }

}
