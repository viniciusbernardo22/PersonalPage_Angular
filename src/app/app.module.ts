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
  faThreads,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TrajectoryComponent } from './pages/trajectory/trajectory.component';
import { TyperComponent } from './pages/typer/typer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TyperComponent,
    ProjectsComponent,
    ContactComponent,
    TrajectoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faFacebook, faWhatsapp, faThreads);
  }
}
