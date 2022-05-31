import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='https://agile-atoll-19905.herokuapp.com/api/user';
  constructor(private http:HttpClient) {}

    getUser(id: string):Observable<any> {
      return this.http.get(this.url + "/" + id);
   }

   editUser(id:string, user: User):Observable<any> {
    return this.http.put(this.url + "/" + id, user);
   }

}
