import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
    url='https://agile-atoll-19905.herokuapp.com/api/proyecto';
  constructor(private http:HttpClient) { }
  
  getLista():Observable<any> {
    return this.http.get(this.url);
  }

  getProyecto(id: string):Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  editProyecto(id:string, proyecto: Proyecto):Observable<any> {
    return this.http.put(this.url + "/" + id, proyecto);
  }

  addProyecto(proyecto: Proyecto):Observable<any> {
    return this.http.post(this.url, proyecto);
  }

  deleteProyecto(id:string):Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }

}
