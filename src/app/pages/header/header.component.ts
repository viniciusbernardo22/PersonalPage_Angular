import { HeaderOptions } from 'src/app/types/headerOptions';
import { headerOptions } from './header.config';
import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
  public headerOptions: Observable<HeaderOptions[]> = of(headerOptions);
}
