import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ForecastItem } from '../types';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  @Input() forecastList: ForecastItem[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.forecastList = this.transformForecastList(
      changes['forecastList'].currentValue
    );
  }

  transformForecastList(forecastList: ForecastItem[]): ForecastItem[] {
    let newList = [...forecastList];
    newList.length = 9;
    newList.forEach(
      (item: any) => (item.main.temp = Math.round(item.main.temp - 273.15))
    );
    return newList;
  }

  transformTxtDate(txt: string): string {
    const [date, time] = txt.split(' ');
    return `${time.substring(0, 5)} ${date}`;
  }
}
