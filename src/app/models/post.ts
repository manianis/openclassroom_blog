export default class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(item?: Post) {
    this.title = item.title || '';
    this.content = item.content || '';
    this.loveIts = item.loveIts || 0;
    this.created_at = item.created_at || new Date();
  }
}