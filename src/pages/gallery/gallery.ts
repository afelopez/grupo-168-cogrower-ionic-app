import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'

})
export class GalleryPage {
  images = ['H1.jpeg', 'H2.jpg', 'H3.jpg', 'H4.jpg', 'H5.png', 'H6.jpg', 'H7.jpg', 'H8.jpg', 'H9.jpeg', 'H10.jpg', 'H10.jpg','H11.jpg']
  iman2 = ['H6.jpg', 'H7.jpg', 'H8.jpg', 'H9.jpeg', 'H10.jpg', 'H10.jpg','H11.jpg']
  constructor(public navCtrl: NavController) {

  }

}
