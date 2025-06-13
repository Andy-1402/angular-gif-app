<<<<<<< HEAD
import { Gif } from './../../interfaces/gifs.interfaces';
import { GifsService } from './../../services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifsService: GifsService){}

  get gifs(): Gif[] {
    return this.gifsService.gifsList
=======
import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor( private gifsService: GifsService ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  }

}
