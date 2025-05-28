import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const firebaseConfig = {
    apiKey: "AIzaSyAkNJ3Y03d0H6-dQrYvXFVTBzIU9ZjPxp4",
    authDomain: "myrersume.firebaseapp.com",
    projectId: "myrersume",
    storageBucket: "myrersume.appspot.com",
    messagingSenderId: "900714367404",
    appId: "1:900714367404:web:60307158d838dc6c471209"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);