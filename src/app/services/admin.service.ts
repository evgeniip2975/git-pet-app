import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/admin/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

   getPersonalList() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=6')
  }
   getPerson(id: number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
