import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/models/Educacion';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

    list:Educacion[] = [];

    idx:string = '';
    form: FormGroup;

  newForm:boolean = false;
  editMode:boolean = false;

  constructor(private educacionService:EducacionService) {

    this.form= new FormGroup ({
      institucion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      titulo: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      fechaInicio: new FormControl(['']),
      fechaFin: new FormControl([''])
    })
   }

  ngOnInit(): void {
    
    this.getEducacion();

  }

  getEducacion():void{
    this.educacionService.getLista().subscribe(list => this.list = list);
  }

  onDeleteEducacion(){
    this.educacionService.deleteEducacion(this.list[0].id).subscribe(() => this.getEducacion());
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

  onSaveNewEducacion(event: Event ){
    event.preventDefault;

    this.educacionService.addEducacion(this.form.value).subscribe(res => {
      if(res.ok){
        this.getEducacion();
      }
      else {
        console.log(res.error);
        this.educacionService.getLista().subscribe(list => this.list = list);
      }
    });
  }

  onCancelNuevaEdu(){
    this.newForm=false;
  }

  onEditEducacion(id:string){

    this.idx = id;
    this.editMode=true;

    this.educacionService.getEducacion(id).subscribe(res => {

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
        this.educacionService.getLista().subscribe(list => this.list = list);
      }
    });
  }


  onSaveEditEducacion(id:string ){
    console.log(id)
    this.educacionService.editEducacion(id, this.form.value).subscribe(res => {
      if(res.ok){
        this.educacionService.getLista().subscribe(list => this.list = list);
      }
      else {
        console.log(res.error);
        this.educacionService.getLista().subscribe(list => this.list = list);
      }
    });
  }

  onCancelNuevaEducacion(){
    this.newForm=false;
  }


}
