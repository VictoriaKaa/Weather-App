import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-block',
  standalone: true,
  imports: [],
  templateUrl: './weather-block.component.html',
  styleUrl: './weather-block.component.scss',
})
export class WeatherBlockComponent {
  @Input() description: string = '';
  @Input() info: string = '';
  @Input() name: string = '';
}
