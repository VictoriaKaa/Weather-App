import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WeatherFormComponent } from '../weather-form/weather-form.component';
import { WeatherMainComponent } from '../weather-main/weather-main.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { weatherMap } from '../common/utils';
import { Forecast, Weather, WeatherData } from '../common/types';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    WeatherFormComponent,
    WeatherMainComponent,
    WeatherForecastComponent,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weather: Weather;
  forecast: Forecast;

  getImageEvent(): any {
    const imgSrc = this.weather
      ? weatherMap.get(`${this.weather.weather[0].icon}`)
      : weatherMap.get('01d');
    return (
      'background-image:  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), ' +
      `url("${imgSrc}")`
    );
  }

  updateWeather(weatherData: WeatherData): void {
    this.weather = <Weather>weatherData[0];
    this.forecast = <Forecast>weatherData[1];
  }
}
