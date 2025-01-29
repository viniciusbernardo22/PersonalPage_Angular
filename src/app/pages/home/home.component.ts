import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { TyperComponent } from '../typer/typer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ContactComponent, TyperComponent, ProjectsComponent, ContactComponent, HeaderComponent]
})
export class HomeComponent {}
