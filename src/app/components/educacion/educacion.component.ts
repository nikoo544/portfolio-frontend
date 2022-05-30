import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

    list:Educacion[] = [];

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    
    this.getEducacion();

  }

  getEducacion():void{
    this.educacionService.getLista().subscribe(list => this.list = list);
  }

  onDeleteEducacion(){
    this.educacionService.deleteEducacion(this.list[0].id).subscribe(() => this.getEducacion());
  }

}
