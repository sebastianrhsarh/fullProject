import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public uri = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }
  
  public async getAllUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.http.get(`${this.uri}`).subscribe((data: any) => {
        resolve(data.map(value =>  new User(value)));
      });
    });
  }
}
