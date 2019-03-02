export default class Post {
  id: number;
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(item: any = {}) {
    this.id = item.id || 0;
    this.title = item.title || '';
    this.content = item.content || '';
    this.loveIts = item.loveIts || 0;
    this.created_at = item.created_at || new Date();
  }
}