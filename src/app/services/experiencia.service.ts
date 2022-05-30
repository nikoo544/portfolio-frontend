import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url='https://agile-atoll-19905.herokuapp.com/api/experiencia';
  constructor(private http:HttpClient) { }

  getLista():Observable<any> {
    return this.http.get(this.url);
  }

  getExperiencia(id: string):Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  editExperiencia(id:string, experiencia: Experiencia):Observable<any> {
    return this.http.put(this.url, experiencia);
  }

  addExperiencia(experiencia: Experiencia):Observable<any> {
    return this.http.post(this.url, experiencia);
  }

  deleteExperiencia(id:string):Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }

}
