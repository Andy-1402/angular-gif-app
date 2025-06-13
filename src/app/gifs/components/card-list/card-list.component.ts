import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',

})
export class CardListComponent {


  @Input()
  public gifs: Gif[] = [];

}
