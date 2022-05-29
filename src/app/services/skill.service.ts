import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url='https://agile-atoll-19905.herokuapp.com/api/skill';
  constructor(private http:HttpClient) { }

  getLista():Observable<any> {
    return this.http.get(this.url);
  }

  getSkill(id: string):Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  editSkill(id:string, skill: Skill):Observable<any> {
    return this.http.put(this.url, skill);
  }

  addSkill(id:string, skill: Skill):Observable<any> {
    return this.http.post(this.url, skill);
  }

  deleteSkill(id:string):Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }

}
