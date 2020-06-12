import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../services/photo.service'

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss'],
})
export class PlantPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

}
