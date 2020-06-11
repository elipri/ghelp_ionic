import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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

}
