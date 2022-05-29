import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/list/list.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ListComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
