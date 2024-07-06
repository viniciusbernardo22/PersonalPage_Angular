import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactOptions } from 'src/app/models/contactOptions.js';

import { contactConfig } from './contact.config.ts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public contacts: Observable<ContactOptions[]> = of(contactConfig);
}
