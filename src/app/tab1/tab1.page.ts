import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private weatherService: WeatherService, private geolocation: Geolocation) {}

  public weather;
  public city;
  latitude: any = 0;
  longitude: any = 0;

  option = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  }

  getWeather(latitude, longitude) {
    //this.city = 'Tallinn';
    this.weatherService.getWeatherFromApi(latitude, longitude).subscribe(
      weather => {
        this.weather = weather;
        console.log(weather);
    });
    
  }

  getGeo() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      //console.log(this.latitude, this.longitude);
      this.getWeather(this.latitude, this.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     /* let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     }); */
  }
  

  ngOnInit() {
    this.getGeo(); 
  }

}
