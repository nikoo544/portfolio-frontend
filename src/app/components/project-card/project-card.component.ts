import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  list:Proyecto[] = [];

  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {

    this.projectsService.getLista().subscribe(list => this.list = list);

  }



}
