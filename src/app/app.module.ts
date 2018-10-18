import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { SigninPage } from '../pages/sign-in/sign-in';
import { SignupPage } from '../pages/sign-up/sign-up';
import { ProfilePage } from '../pages/profile/profile';
import { OrchardDetailsPage } from '../pages/orchard-details/orchard-details';
import { OrchardWriterPage } from '../pages/orchard-writer/orchard-writer';
import { OrchardsPage } from '../pages/orchards/orchard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SigninPage,
    SignupPage,
    ProfilePage,
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
    SigninPage,
    SignupPage,
    ProfilePage,
    OrchardDetailsPage,
    OrchardWriterPage,
    OrchardsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
