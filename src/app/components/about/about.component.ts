import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  form: FormGroup;
  editMode:boolean = false;

  constructor(private personaService: PersonaService) {

    this.form= new FormGroup ({
      id: new FormControl('1'),
      nombre: new FormControl(['']),
      apellido: new FormControl(['']),
      correo: new FormControl(['']),
      sobreMi: new FormControl(['']),
      urlFoto: new FormControl([''])
    })
   }



  id:string = "1";
  nombre:string = "";
  apellido:string = "";
  sobreMi:string = "";
  correo:string = "";
  urlFoto:string = "";


  ngOnInit(): void {
    
  this.mostrarDatos("1");
  }
  
  mostrarDatos(id: string){
    this.personaService.getUser(id).subscribe(data => {
      this.nombre = data.nombre;
      this.sobreMi = data.sobreMi;
      this.apellido = data.apellido;
      this.correo = data.correo;
      this.urlFoto = data.urlFoto;
      console.log(data)
      return data;
    });
  }

  onSave(){
    this.personaService.editUser("1", this.form.value).subscribe(res => {
      if(res.ok){
        this.personaService.getUser("1").subscribe(data =>{

          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.sobreMi = data.sobreMi;
          this.correo = data.correo;
          this.urlFoto = data.urlFoto;
        });
      }
      else {
        this.personaService.getUser("1").subscribe(data =>{
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.sobreMi = data.sobreMi;
          this.correo = data.correo;
          this.urlFoto = data.urlFoto;
        });
      }
    });
  }

  onEdit(){
    this.editMode = true;
  }

  onCancel(){
    this.editMode=false;
  }


}
