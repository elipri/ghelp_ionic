import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public arr =[
    'Plant1', 
    'Plant2', 
    'Plant3',
    'Plant4', 
    'Plant5', 
    'Plant6',
    'Plant7', 
    'Plant8', 
    'Plant9'
  ];
  public hideMe = false;
  constructor(private navCtrl: NavController) {

  }

  openHelp() {
    //console.log('blah');
    this.navCtrl.navigateForward('/help');
  }

  openPlant() {
    this.navCtrl.navigateForward('/plant');
  }

  editPlant() {
    //console.log('do something');
  }

  /* changeStyle() {
    if(document.getElementById("cards").classList.contains("ion-hide")){
      document.getElementById("cards").classList.remove("ion-hide");
    } else {
      document.getElementById("cards").className = "ion-hide";
    }  
  } */

  hide() {
    this.hideMe = !this.hideMe;
  }


}
