export interface Weather {
  name: string;
  weather: WeatherDesciption[];
  main: MainWeather;
  timezone: number;
  wind: WeatherWind;
}
interface MainWeather {
  feels_like: number;
  humidity: number;
  temp: number;
}
interface WeatherWind {
  speed: number;
  deg: number;
}
interface WeatherDesciption {
  description: string;
  main: string;
  icon: string;
}
export interface Forecast {
  name: string;
  list: ForecastItem[];
  city: ForecastCity;
}
interface ForecastCity {
  name: string;
  sunrise: number;
  sunset: number;
  timezone: number;
}
export interface ForecastItem {
  dt_txt: string;
  main: MainWeather;
  weather: WeatherDesciption[];
}

export type WeatherData = Array<Weather | Forecast>;
