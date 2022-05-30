import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/Skill';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  list:Skill[] = [];

  idx:string = '';
  editMode:boolean = false;

  form: FormGroup;

  newForm:boolean = false;

  constructor(private skillService:SkillService) { 

    this.form= new FormGroup ({
      nombre: new FormControl(['']),
      porcentaje: new FormControl(['']),
    })

  }

  ngOnInit(): void {

    this.skillService.getLista().subscribe(list => this.list = list);

  }


    getSkill():void{
      this.skillService.getLista().subscribe(list => this.list = list);
    }


  deleteSkill(id:string){
      
      this.skillService.deleteSkill(id).subscribe(res => {
  
        if(res.ok){
          this.getSkill();
        } else {
          console.log(res.error);
          this.skillService.getLista().subscribe(list => this.list = list);
        }
      });
  
    }

    onCrear(){
      let objetoFormulario = this.form.controls;

      let valueForms = Object.values(objetoFormulario);
     
      valueForms[0].setValue('');
      valueForms[1].setValue('');
      
      this.newForm=true;
    }

    onSaveNewSkill(event: Event ){

      event.preventDefault;

      this.skillService.addSkill(this.form.value).subscribe(data => {
        this.skillService.getLista().subscribe(list => this.list = list);
      });
  
      this.newForm=false;
    }

  
    onCancelNuevoRegistro(){
      this.newForm=false;
    }

    onEditSkill(id:string){

      this.idx = id;
      this.editMode=true;
  
      this.skillService.getSkill(id).subscribe(res => {
  
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
          this.skillService.getLista().subscribe(list => this.list = list);
        }
      });
    }
  
  
    onSaveEditSkill(id:string ){
      console.log(id)
      this.skillService.editSkill(id, this.form.value).subscribe(res => {
        if(res.ok){
          this.skillService.getLista().subscribe(list => this.list = list);
        }
        else {
          console.log(res.error);
          this.skillService.getLista().subscribe(list => this.list = list);
        }
      });
    }

    onCancelNuevaExp(){
      this.newForm=false;
    }
  
  

}

