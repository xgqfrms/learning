import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';


// Must export the config
export const firebaseConfig = {
apiKey: "AAAAgzIb5ZQ:APA91bGXDUBV6PTOhrNFSdN5IR3oFplYRxk2SLVP7sNC5S7bx0HMJhmSBaE66qdsdGcQ5yWiirfWtZ2pmxCeCFeBL-sEbPK4sMe1FeL1Fa2HSLAp-6YkH6MH3KlxJyXIHllKczogWXzgv3sQJ5vtWxxG5gG60ufvzQ",
    authDomain: "angular2-88ac6.firebaseapp.com",
    databaseURL: "https://angular2-88ac6.firebaseio.com",
    storageBucket: "angular2-88ac6.appspot.com",
    messagingSenderId: "563481404820"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

