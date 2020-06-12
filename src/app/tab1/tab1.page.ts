import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private weatherService: WeatherService) {}

  public weather;
  public city;

  getWeather() {
    this.city = 'Tallinn';
    this.weatherService.getWeatherFromApi(this.city).subscribe(
      weather => {
        this.weather = weather;
    });
    
  }

  ngOnInit() {
    this.getWeather();
  }

}
