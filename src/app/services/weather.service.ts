import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherFromApi(city: string){
    console.log(city);
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d2123f2d15f94711f7309d142d59d028`);

    //https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
    //d2123f2d15f94711f7309d142d59d028
  }
}
