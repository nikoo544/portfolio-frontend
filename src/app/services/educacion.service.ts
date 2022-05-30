import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url='https://agile-atoll-19905.herokuapp.com/api/educacion';
  constructor(private http:HttpClient) {}

    getLista():Observable<Educacion[]> {
      return this.http.get<Educacion[]>(this.url);
    }

    getEducacion(id: string):Observable<Educacion> {
      return this.http.get<Educacion>(this.url + "/" + id);
    }

    editEducacion(id:string, educacion: Educacion):Observable<Educacion> {
      return this.http.put<Educacion>(this.url, educacion);
    }
   
    addEducacion(id:string, educacion: Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(this.url, educacion);
    }

    deleteEducacion(id:string):Observable<void> {
      return this.http.delete<void>(this.url + "/" + id);
    }

}

