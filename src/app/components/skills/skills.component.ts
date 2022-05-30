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

  form: FormGroup;

  newForm:boolean = false;

  constructor(private skillService:SkillService) { 

    this.form= new FormGroup ({
      nombre: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
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
  

}

