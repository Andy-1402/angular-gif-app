<<<<<<< HEAD
import { SharedModule } from './../shared/shared.module';
=======
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
<<<<<<< HEAD
import { CardComponent } from './components/card/card.component';
=======
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
<<<<<<< HEAD
    CardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomePageComponent,
    CardListComponent,
=======
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  ]
})
export class GifsModule { }
