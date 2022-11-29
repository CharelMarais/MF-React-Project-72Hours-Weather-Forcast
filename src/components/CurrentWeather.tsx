import { TiWeatherCloudy } from 'react-icons/ti';
import { City, WeatherDateSeries } from '../models/models';
import {
  calculateCurrentWeatherStatus,
  calculateMaxTemp,
  calculateMinTemp,
} from '../utils/utilities';
import { IconSelection } from './IconSelection';

interface ICurrentWeatherProps {
  selectedCity: City;
  selectedCityData: WeatherDateSeries[];
  selectedCityCurrentInfo: WeatherDateSeries;
}

function CurrentWeather({
  selectedCity,
  selectedCityData,
  selectedCityCurrentInfo,
}: ICurrentWeatherProps) {
  const weatherStatus = calculateCurrentWeatherStatus(
    selectedCityCurrentInfo.cloudcover,
    selectedCityCurrentInfo.prec_type
  );

  const maxTemp = calculateMaxTemp(selectedCityData);
  const minTemp = calculateMinTemp(selectedCityData);

  return (
    <div className="card w-full bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h1 className="card-title text-4xl">
          {selectedCityCurrentInfo.temp2m}˚
        </h1>
        <p>
          {weatherStatus} {maxTemp}˚/{minTemp}˚C
        </p>
        <div className="absolute right-4 -top-6 text-8xl">
          <IconSelection
            cloudCover={selectedCityCurrentInfo.cloudcover}
            precType={selectedCityCurrentInfo.prec_type}
            time={selectedCity.time + selectedCity.gmtDiff}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
