import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  id:string = "";
  nombre:string = "";
  descripcion:string = "";
  fechaInicio:string = "";
  fechaFin:string = "";

  list:Experiencia[] = [];

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getLista().subscribe(list => this.list = list);
    
  }

  getExperiencia():void{
    this.experienciaService.getLista().subscribe(list => this.list = list);
  }

  onDeleteExperiencia(id:any){
    this.experienciaService.deleteExperiencia(this.list[id].id).subscribe(() => this.getExperiencia());
  }

  deleteExp(id:string){ 
    this.experienciaService.deleteExperiencia(id).subscribe(res => {
      if(res.ok){
        this.getExperiencia();
      }
      else {
        console.log(res.error);
        this.experienciaService.getLista().subscribe(list => this.list = list);
      }
    });
  }

}
