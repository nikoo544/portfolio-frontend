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
  
  idx:string='';

  newForm:boolean = false;
  editMode:boolean = false;

  constructor(private experienciaService:ExperienciaService) { 

    this.form= new FormGroup ({
      nombre: new FormControl(['']),
      descripcion: new FormControl(['']),
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

  
  onEditExperiencia(id:string){

    this.idx = id;
    this.editMode=true;

    this.experienciaService.getExperiencia(id).subscribe(res => {

      if(res.ok){
        this.form.setValue({
          institucion: res.educacion.institucion,
          titulo: res.educacion.titulo,
          fechaInicio: res.educacion.fechaInicio,
          fechaFin: res.educacion.fechaFin
        })
      }
      else {
        console.log(res.error);
        this.experienciaService.getLista().subscribe(list => this.list = list);
      }
    });
  }


  onSaveEditExperiencia(id:string ){
    console.log(id)
    this.experienciaService.editExperiencia(id, this.form.value).subscribe(res => {
      if(res.ok){
        this.experienciaService.getLista().subscribe(list => this.list = list);
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

  onCancelEdit(){
    this.editMode=false;
  }

  onCancelNuevaExp(){
    this.newForm=false;
  }


}
