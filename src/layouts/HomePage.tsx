import { useEffect, useState } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import DetailsTable from '../components/DetailsTable';
import SelectList from '../components/SelectList';
import { cityVariables } from '../data/city-info';
import { WeatherDateSeries, WeatherRootObject } from '../models/models';
import { getWeatherFromLocation } from '../services/weather-services';
import { setCurrentWeatherObject } from '../utils/utilities';

function HomePage() {
  const [selectedCity, setSelectedCity] = useState(cityVariables[0]);
  const [selectedCityData, setSelectedCityData] =
    useState<WeatherDateSeries[]>();
  const [selectedCityCurrentInfo, setSelectedCityCurrentInfo] =
    useState<WeatherDateSeries>();

  useEffect(() => {
    if (selectedCity) {
      getWeatherFromLocation(
        selectedCity?.longitude,
        selectedCity?.latitude
      ).then((response) => {
        if (response.ok) {
          response.json().then((jsonResponse: WeatherRootObject) => {
            setSelectedCityData(jsonResponse.dataseries);
            setSelectedCityCurrentInfo(
              setCurrentWeatherObject(
                jsonResponse.dataseries,
                selectedCity.time,
                selectedCity.gmtDiff
              )
            );
          });
        }
      });
    }
  }, [selectedCity]);

  return (
    <div className="flex flex-col p-4">
      <SelectList
        selectedCity={selectedCity}
        callback={setSelectedCity}
      />
      {selectedCityData && selectedCityCurrentInfo && (
        <CurrentWeather
          selectedCity={selectedCity}
          selectedCityData={selectedCityData}
          selectedCityCurrentInfo={selectedCityCurrentInfo}
        />
      )}
      {selectedCityData && (
        <DetailsTable
          selectedCityData={selectedCityData}
          selectedCity={selectedCity}
        />
      )}
    </div>
  );
}

export default HomePage;
