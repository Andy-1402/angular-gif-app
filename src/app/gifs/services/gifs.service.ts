<<<<<<< HEAD
import { Gif, SearchResponse } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89

@Injectable({ providedIn: 'root' })
export class GifsService {

<<<<<<< HEAD
  public gifsList:Gif[]= [];





  private _tagsHistory: string[] = [];
  private apiKey: string = '4Oe4DBVOZ3rkACUaox9lOMZGdkEEos2Q';
  private serviceUrl:string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
=======
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey:       string = 'dGMJW12nlHSz46O3sy81BZFryoPshmUk';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

<<<<<<< HEAD
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
=======
    if ( this._tagsHistory.includes( tag ) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
<<<<<<< HEAD
    localStorage.setItem('history', JSON.stringify(this.tagsHistory))
  }


  private loadLocalStorage(): void{
    if (!localStorage.getItem('history') ) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);


  }

  

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {


        this.gifsList = resp.data;
        // console.log({gifs: this.gifsList});
      })
  }
=======
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
  }

  private loadLocalStorage():void {
    if( !localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] );
  }


  searchTag( tag: string ):void {
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey )
      .set('limit', '10' )
      .set('q', tag )

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( resp => {

        this.gifList = resp.data;
        // console.log({ gifs: this.gifList });

      });






  }


>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
}
