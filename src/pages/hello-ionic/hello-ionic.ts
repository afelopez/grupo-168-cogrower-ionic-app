import { Component, ViewChild, ElementRef } from '@angular/core';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(private _googleMaps: GoogleMaps) {

  }

  ngAfterViewInit(){
    this.initMap();
  }

  initMap(){
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)
  }

}
