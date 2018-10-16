import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Geoposition } from '@ionic-native/geolocation';
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

declare var google;

//@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  map: any;
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad(){
    this.getPosition();
  }

  getPosition():any {
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
      console.log(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    /*let latitude = position.coords.latitude;
    let longitude = position.coords.latitude;*/
    let latitude = 4.660628;
    let longitude = -74.10289;
    console.log(latitude,longitude);

    let mapEle: HTMLElement = document.getElementById('map');
    let myLatlng = {lat: latitude, lng: longitude};
    this.map = new google.maps.Map(mapEle, {
      center: myLatlng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', ()=>{
      let marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        title: 'porfin'
      });
      mapEle.classList.add('show-map');
    });
  }

  /*ngAfterViewInit(){
    this.geolocationNative();
  }

  geolocationNative(){
      this.geolocation.getCurrentPosition().then((geposition: Geoposition)=>{
      console.log(geposition);
      this.loadMap(geposition);
      })

      }

      loadMap(){
        /*Environment.setEnv({
          'API_KEY_FOR_BROWSER_RELEASE':'',
          'API_KEY_FOR_BROWSER_DEBUG':''
        });
        this.map = GoogleMaps.create('map');
        /*let element: HTMLElement = document.getElementById('map');
        let map: GoogleMap = this.googleMaps.create(element);
        let latlng = new latLng(position.coords.latitude, position.coords.longitude);
        map.one(GoogleMapsEvent.MAP_READY).then(() => {

          let position: CameraPosition  = {
              target: latlng,
              zoom: 10,
              tilt: 30
          };

            //map.moveCamera(position);
        })
      }*/
  }
