import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { OrchardDetailsPage } from '../pages/orchard-details/orchard-details';
import { OrchardWriterPage } from '../pages/orchard-writer/orchard-writer';
import { OrchardsPage } from '../pages/orchards/orchard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation'

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    OrchardDetailsPage,
    OrchardWriterPage,
    OrchardsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    OrchardDetailsPage,
    OrchardWriterPage,
    OrchardsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
