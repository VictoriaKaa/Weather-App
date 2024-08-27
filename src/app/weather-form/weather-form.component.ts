import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../common/types';

@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.scss',
})
export class WeatherFormComponent {
  city: string = '';
  @Output() weatherData = new EventEmitter<WeatherData>();

  constructor(private weatherService: WeatherService) {}

  onSubmit(): void {
    forkJoin([
      this.weatherService.getWeather(this.city),
      this.weatherService.getForecast(this.city),
    ]).subscribe((data) => {
      this.weatherData.emit(data);
    });
  }
}
