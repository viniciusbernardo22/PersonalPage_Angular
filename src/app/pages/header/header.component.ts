import { HeaderOptions } from 'src/app/models/headerOptions';
import { headerOptions } from './header.config';
import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public headerOptions: Observable<HeaderOptions[]> = of(headerOptions);
}
