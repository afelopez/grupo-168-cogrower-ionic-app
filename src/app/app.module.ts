//import { AuthService } from './auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { SigninPage } from '../pages/sign-in/sign-in';
import { SignupPage } from '../pages/sign-up/sign-up';
import { ProfilePage } from '../pages/profile/profile';
import { OrchardDetailsPage } from '../pages/orchard-details/orchard-details';
import { OrchardWriterPage } from '../pages/orchard-writer/orchard-writer';
import { OrchardsPage } from '../pages/orchards/orchard';
import { GalleryPage } from '../pages/gallery/gallery';

import { Geolocation } from '@ionic-native/geolocation';
//import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment} from '@ionic-native/google-maps';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'YOUR IONIC APP ID'
  },
  'auth': {
    'facebook': {
      'scope': []
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    OrchardDetailsPage,
    OrchardWriterPage,
    OrchardsPage,
    GalleryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
	CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    SigninPage,
    SignupPage,
    ProfilePage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
	//AuthService
  ]
})
export class AppModule {}
