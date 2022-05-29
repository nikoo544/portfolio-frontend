import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

    id:string = "";
    institucion:string = "";
    titulo:string = "";
    fechaInicio:string = "";
    fechaFin:string = "";

    list:Educacion[] = [];



  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
   this.educacionService.getLista().subscribe(list => this.list = list);
  }

  mostrarDatos(){
  this.educacionService.getLista().subscribe(data => {
    this.institucion = data.institucion;
    this.titulo = data.titulo;
    this.fechaInicio = data.fechaInicio;
    this.fechaFin = data.fechaFin;
    console.log(data)
    return data
  });

}

}
