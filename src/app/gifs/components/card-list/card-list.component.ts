<<<<<<< HEAD
import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',

})
export class CardListComponent {


=======
import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  @Input()
  public gifs: Gif[] = [];

}
