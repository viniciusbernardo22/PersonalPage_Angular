import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faThreads,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare as farCheckSquare,
  faSquare as farSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TyperComponent } from './pages/typer/typer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TyperComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faFacebook, faWhatsapp, faThreads);
  }
}
