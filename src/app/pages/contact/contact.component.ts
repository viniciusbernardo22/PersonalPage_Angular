import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactOptions } from 'src/app/types/contactOptions.js';

import { contactConfig } from './contact.config.ts';
import {  FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FaIconComponent, CommonModule]
})
export class ContactComponent {
  public contacts: Observable<ContactOptions[]> = of(contactConfig);
}
