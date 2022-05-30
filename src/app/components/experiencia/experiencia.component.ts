import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/Experiencia';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  list:Experiencia[] = [];

  form: FormGroup;

  newForm:boolean = false;

  constructor(private experienciaService:ExperienciaService) { 

    this.form= new FormGroup ({
      nombre: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      descripcion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      fechaInicio: new FormControl(['']),
      fechaFin: new FormControl([''])
    });

  }

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

  onCrear(){

    let objetoFormulario = this.form.controls;
    let valueForms = Object.values(objetoFormulario);

    valueForms[0].setValue('');
    valueForms[1].setValue('');
    valueForms[2].setValue('');
    valueForms[3].setValue('');

    this.newForm=true;
  }

  onSaveNewExperiencia(event: Event ){
    event.preventDefault;

    this.experienciaService.addExperiencia(this.form.value).subscribe(res => {
      if(res.ok){
        this.getExperiencia();
      }
      else {
        console.log(res.error);
        this.experienciaService.getLista().subscribe(list => this.list = list);
      }
    });
  }

  onCancelNuevaExp(){
    this.newForm=false;
  }


}
