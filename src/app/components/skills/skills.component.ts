import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  list:Skill[] = [];

  constructor(private skillService:SkillService) { }

  ngOnInit(): void {

    this.skillService.getLista().subscribe(list => this.list = list);

  }

}
