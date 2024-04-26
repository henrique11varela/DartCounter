import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { environment } from './environment/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);