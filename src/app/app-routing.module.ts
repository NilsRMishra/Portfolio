import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { animation } from '@angular/animations';

const routes: Routes = [
	{
		path: '', component: MainLayoutComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
			{ path: 'education', component: EducationComponent, data: {animation: 'EducationPage'} },
			{ path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectsPage'} },
			{ path: 'skills', component: SkillsComponent, data: {animation: 'SkillsPage'} },
			{ path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'} }
		],
	},
	{ path: '**', redirectTo: 'home' }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
