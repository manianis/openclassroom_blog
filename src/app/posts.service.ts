import { Injectable } from '@angular/core';
import Post from './models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    new Post({
      id: 1,
      title: 'Mon premier post',
      content: 'Ceci est mon premier post dans ce blog!',
      loveIts: 5,
      created_at: new Date(2019, 1, 11, 18, 42)
    }),
    new Post({
      id: 2,
      title: 'Mon second post',
      content: 'Après un premier POST, il faudra bien qu\'il y ait un deuxième. Le voici!',
      loveIts: -5,
      created_at: new Date(2019, 1, 11, 18, 42)
    }),
    new Post({
      id: 3,
      title: 'Angular',
      content: 'Angular est un framework fabuleux!',
      loveIts: 0,
      created_at: new Date(2019, 1, 11, 18, 42)
    })
  ];

  postsSubject: Subject<Post[]> = new Subject<Post[]>();

  constructor() { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();
  }

  removePost(id: number) {
    const fPos = this.posts.find((post: Post) => post.id === id);
    if (fPos) {
      const idx = this.posts.indexOf(fPos);
      this.posts.splice(idx, 1);
      this.emitPostSubject();
    }
  }

  setLoveIts(id: number, loves: number) {
    const fPos = this.posts.find((post: Post) => post.id === id);
    if (fPos) {
      const idx = this.posts.indexOf(fPos);
      this.posts[idx].loveIts = loves;
      this.emitPostSubject();
    }
  }
}
