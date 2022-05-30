import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  list:Proyecto[] = [];

  constructor(private projectsService:ProjectsService) { }

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
    
        if(res.ok){
    
          this.list = this.list.filter(item => item.id != id);
          this.projectsService.getLista().subscribe(data => this.list = data);
    
        }
    
        else {
            
            console.log(res.error);
            this.getProject();
    
        }
    
      });
    
    }

}
