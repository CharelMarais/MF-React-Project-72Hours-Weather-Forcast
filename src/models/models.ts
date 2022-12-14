export interface Wind10m {
  direction: string;
  speed: number;
}

export interface WeatherDateSeries {
  timepoint: number;
  cloudcover: number;
  seeing: number;
  transparency: number;
  lifted_index: number;
  rh2m: number;
  wind10m: Wind10m;
  temp2m: number;
  prec_type: string;
}

export interface WeatherRootObject {
  product: string;
  init: string;
  dataseries: WeatherDateSeries[];
}

export interface TimeZoneRootObject {
  timezone: string;
  timezone_offset: number;
  timezone_offset_with_dst: number;
  date: string;
  date_time: string;
  date_time_txt: string;
  date_time_wti: string;
  date_time_ymd: Date;
  date_time_unix: number;
  time_24: string;
  time_12: string;
  week: number;
  month: number;
  year: number;
  year_abbr: string;
  is_dst: boolean;
  dst_savings: number;
}

export interface City {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  time: number;
  gmtDiff: number;
}

export interface CityWeather {
  cityTemp: number;
  cityIcon: string;
  cityWindSpeed: number;
  cityWindDirection: string;
}

export interface CityDetailsProps {
  city: City;
  selectedId: number;
  // callBackFunction: () => void;
}

export interface SelectedCityProps {
  selectedCity: City;
  selectedCityData: WeatherDateSeries[];
}
