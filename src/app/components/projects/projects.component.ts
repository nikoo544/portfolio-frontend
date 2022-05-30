import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Proyecto } from 'src/app/models/Proyecto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  list:Proyecto[] = [];

  form: FormGroup;

  newForm:boolean = false;

  constructor(private projectsService:ProjectsService) { 

    this.form= new FormGroup ({
      nombre: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      descripcion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      urlFoto: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
    })


  }

  ngOnInit(): void {

    this.listar();
    
  }

  listar(){
    this.projectsService.getLista().subscribe(list => this.list = list);
  }

  
  getProject():void{
    this.projectsService.getLista().subscribe(list => this.list = list);
  }

  deleteProject(id:string){
        
      this.projectsService.deleteProyecto(id).subscribe(res => {
    
        if(res){
    
          this.list = this.list.filter(item => item.id != id);
          this.projectsService.getLista().subscribe(data => this.list = data);
          console.log(res)
          console.log("true amigo")
    
        }
    
        else {
            console.log("else")
            this.getProject();
    
        }
    
      });
    
    }

    onCrear(){
      let objetoFormulario = this.form.controls;
      let keysForms =  Object.keys(objetoFormulario);
      console.log("keysForm: ", keysForms);
      let valueForms = Object.values(objetoFormulario);
      console.log("valuesForm: ", valueForms);

      valueForms[0].setValue('');
      valueForms[1].setValue('');
      valueForms[2].setValue('');

      this.newForm=true;
    }

    onSaveNewProject(event: Event ){
      event.preventDefault;
      console.log("this.form.value: " , this.form.value);
      console.log("sadasd");

      this.projectsService.addProyecto(this.form.value).subscribe(data => {
        console.log("this.form.value: " , this.form.value);
        this.list.push(data);
        this.projectsService.getLista().subscribe(data => this.list = data);
        console.log(data)
        console.log("true amigo")

      });

    }

    onCancelNuevoProyecto(){
      this.newForm=false;
    }
    

}
