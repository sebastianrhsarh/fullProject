export class Post {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor (data: any = null) {
    if (data) {
      this.userId = data.userId;
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
    }
  }
}