import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonaService {

  url = 'https://agile-atoll-19905.herokuapp.com/api/user/1';
  constructor(private httpClient: HttpClient) {

    getUser():Observable<any> {
      return this.httpClient.get(this.url);
   }
  
}