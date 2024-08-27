import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WeatherCardComponent } from '../common/weather-card/weather-card.component';
import { WeatherBlockComponent } from '../common/weather-block/weather-block.component';
import { GmtOffsetPipe } from '../common/gmt-offset-pipe/gmt-offset.pipe';
import { Forecast } from '../common/types';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [CommonModule, WeatherCardComponent, WeatherBlockComponent],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
})
export class WeatherForecastComponent {
  @Input() forecast: Forecast;

  timeConverter(timestamp: number, timezone: number): string {
    const date = new Date(timestamp * 1000);
    const newGmtOffsetPipe = new GmtOffsetPipe();
    return newGmtOffsetPipe.transform(timezone, date);
  }
}
