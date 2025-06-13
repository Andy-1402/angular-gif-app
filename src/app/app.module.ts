<<<<<<< HEAD
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
=======
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
=======
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    GifsModule,
    SharedModule,
    HttpClientModule,
=======
    HttpClientModule,

    GifsModule,
    SharedModule,
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
