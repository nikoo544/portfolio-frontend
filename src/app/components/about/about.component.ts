import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private personaService: PersonaService) { }
  nombre:string = "";
  sobremi:string = "";

  ngOnInit(): void {
    
  this.mostrarDatos("1");
  }
  
  mostrarDatos(id: string){
    this.personaService.getUser(id).subscribe(data => {
      this.nombre = data.nombre;
      this.sobremi = data.sobreMi;
      console.log(data)
      return data;
    });
  }

}
