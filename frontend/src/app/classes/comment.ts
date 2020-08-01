export class Comment {
  public postId: number;
  public id: number;
  public name: string;
  public email: string;
  public body: string;

  constructor (data: any = null) {
    if (data) {
      this.postId = data.postId;
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
      this.body = data.body;
    }
  }
}