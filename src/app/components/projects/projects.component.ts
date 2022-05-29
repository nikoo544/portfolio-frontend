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

    this.projectsService.getLista().subscribe(list => this.list = list);
    
  }

}
