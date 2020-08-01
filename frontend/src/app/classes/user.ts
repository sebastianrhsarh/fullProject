export class User {
  public id: number;
  public name: string;
  public username: string;
  public email: string;

  constructor (data: any = null) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.username = data.username;
      this.email = data.email;
    }
  }
}