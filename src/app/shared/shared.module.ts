import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
<<<<<<< HEAD
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
=======
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89



@NgModule({
  declarations: [
<<<<<<< HEAD
    SidebarComponent,
    LazyImageComponent
=======
    SidebarComponent
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  ],
  imports: [
    CommonModule
  ],
<<<<<<< HEAD

  exports: [
    SidebarComponent,
    LazyImageComponent,
=======
  exports: [
    SidebarComponent
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  ]
})
export class SharedModule { }
