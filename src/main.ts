import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
<<<<<<< HEAD
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
=======

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> caf7d66d2559c6de6e4f0cf73c809038106d6d89
  .catch(err => console.error(err));
