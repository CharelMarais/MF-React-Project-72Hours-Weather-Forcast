import { City, WeatherDateSeries } from '../models/models';
import SingleWeatherEntry from './SingleWeatherEntry';

interface IDetailsTableProps {
  selectedCityData: WeatherDateSeries[];
  selectedCity: City;
}

function DetailsTable({ selectedCityData, selectedCity }: IDetailsTableProps) {
  return (
    <table className="mt-6">
      <thead>
        <tr>
          <th className=" text-left text-slate-200">72 Hour Report</th>
        </tr>
      </thead>
      <tbody>
        {selectedCityData &&
          selectedCityData.map((data) => {
            return (
              <SingleWeatherEntry
                key={data.timepoint}
                cityWeatherData={data}
                selectedCity={selectedCity}
              />
            );
          })}
      </tbody>
    </table>
  );
}

export default DetailsTable;
