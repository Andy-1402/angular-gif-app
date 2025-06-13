import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
<<<<<<< HEAD
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // private

  constructor(private gifsService: GifsService){}

  get tags():string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string):void {
    this.gifsService.searchTag(tag);
=======
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // private gifsService
  constructor( private gifsService: GifsService  ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ):void {
    this.gifsService.searchTag( tag );
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  }

}
