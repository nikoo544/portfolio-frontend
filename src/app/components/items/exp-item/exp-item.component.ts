import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
ExperienciaService

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {

  list:Experiencia[] = [];
  

  @Input() exp:Experiencia = this.list[0];
  @Output() onDeleteTask: EventEmitter<Experiencia> = new EventEmitter();

  constructor(private esperienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.esperienciaService.getLista().subscribe(list => this.list = list);
    console.log(this.list)
  }
  
  deleteExp(id:string){
    this.onDeleteTask.emit(this.exp);
  }
  

}
