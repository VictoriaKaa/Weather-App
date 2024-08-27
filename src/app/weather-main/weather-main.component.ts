import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WeatherBlockComponent } from '../common/weather-block/weather-block.component';
import { GmtOffsetPipe } from '../common/gmt-offset-pipe/gmt-offset.pipe';
import { Weather } from '../common/types';

@Component({
  selector: 'app-weather-main',
  standalone: true,
  imports: [CommonModule, WeatherBlockComponent, GmtOffsetPipe],
  templateUrl: './weather-main.component.html',
  styleUrl: './weather-main.component.scss',
})
export class WeatherMainComponent {
  @Input() weather: Weather;

  calculateTemp(): string {
    return `${Math.round(this.weather.main.temp)} °C`;
  }
}
