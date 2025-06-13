import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-card',
  standalone: false,

  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

    @Input()
    public gif!: Gif


  ngOnInit(): void {
    if( !this.gif) throw new Error ('Gif required is required.');
  }

}
