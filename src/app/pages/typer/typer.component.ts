import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.css'],
})
export class TyperComponent implements OnInit {
  ngOnInit(): void {
    const options = {
      strings: [
        'Hi, my name is Vinicius.',
        'Build Software is my passion.',
        'Solve problems is my mission.',
      ],
      typeSpeed: 30,
      backSpeed: 30,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    const typed = new Typed('.typewrite', options);
  }
}
