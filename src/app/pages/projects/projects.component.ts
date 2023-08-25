import { Component } from '@angular/core';
import { projectsConfig } from './projects.config';
import { of } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  public Projects = of(projectsConfig);
}
