import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../../../environment';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    return this.http.get<any>(url);
  }

  getForecast(city: string): Observable<any> {
    const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`;
    return this.http.get<any>(url);
  }
}
