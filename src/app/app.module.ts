import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      AngularFireAnalyticsModule,
      AngularFireModule.initializeApp({
      apiKey: "AIzaSyDGjyBxfPZIdvuM4rZU6PONL5Zl4vc_J1g",
      authDomain: "avengers-10c49.firebaseapp.com",
      databaseURL: "https://avengers-10c49.firebaseio.com",
      projectId: "avengers-10c49",
      storageBucket: "avengers-10c49.appspot.com",
      messagingSenderId: "342352870381",
      appId: "1:342352870381:web:520aa9291a3c5c809345e4"
    }),
    AngularFirestoreModule,
    BrowserModule,FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
