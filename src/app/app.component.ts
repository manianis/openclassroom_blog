import { Component, Input } from '@angular/core';
import Post from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    new Post({
      title: 'Mon premier post',
      content: 'Ceci est mon premier post dans ce blog!',
      loveIts: 5,
      created_at: new Date(2019, 1, 11, 18, 42)
    }),
    new Post({
      title: 'Mon second post',
      content: 'Après un premier POST, il faudra bien qu\'il y ait un deuxième. Le voici!',
      loveIts: -5,
      created_at: new Date(2019, 1, 11, 18, 42)
    }),
    new Post({
      title: 'Angular',
      content: 'Angular est un framework fabuleux!',
      loveIts: 0,
      created_at: new Date(2019, 1, 11, 18, 42)
    })
  ];
}
