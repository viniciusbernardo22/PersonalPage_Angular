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
        'Olá, meu nome é Vinicius.',
        'Desenvolvo por paixão.',
        'Me dê um problema, te dou uma solução.',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    const typed = new Typed('.typewrite', options);
  }
}
