import { City, WeatherDateSeries } from '../models/models';
import {
  setTimePointDate,
  setTimePointHours,
  setTimePointString,
} from '../utils/utilities';
import { IconSelection } from './IconSelection';

interface ISingleWeatherEntryProps {
  cityWeatherData: WeatherDateSeries;
  selectedCity: City;
}

function SingleWeatherEntry({
  cityWeatherData,
  selectedCity,
}: ISingleWeatherEntryProps) {
  const currentDate = setTimePointDate(cityWeatherData, selectedCity);
  const currentTime = setTimePointHours(cityWeatherData, selectedCity);
  const currentTimeString = setTimePointString(currentTime);

  return (
    <tr>
      <td>{currentDate}</td>
      <td>{currentTimeString}</td>
      <td className=" text-right pr-2">{cityWeatherData.temp2m}˚C</td>
      <td className="text-xl">
        <IconSelection
          cloudCover={cityWeatherData.cloudcover}
          precType={cityWeatherData.prec_type}
          time={currentTime}
        />
      </td>
    </tr>
  );
}

export default SingleWeatherEntry;
