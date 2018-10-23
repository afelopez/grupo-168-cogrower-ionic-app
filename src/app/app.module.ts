import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { SigninPage } from '../pages/sign-in/sign-in';
import { SignupPage } from '../pages/sign-up/sign-up';
import { OrchardDetailsPage } from '../pages/orchard-details/orchard-details';
import { OrchardWriterPage } from '../pages/orchard-writer/orchard-writer';
import { OrchardsPage } from '../pages/orchards/orchard';
import { GalleryPage } from '../pages/gallery/gallery';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { AuthProvider } from '../providers/auth/auth';
import { MyApp } from './app.component';

import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SigninPage,
    SignupPage,
    OrchardDetailsPage,
    OrchardWriterPage,
    OrchardsPage,
    GalleryPage
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    SigninPage,
    SignupPage,
    OrchardDetailsPage,
    OrchardWriterPage,
    OrchardsPage,
    GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	AuthProvider
  ]
})
export class AppModule {}
