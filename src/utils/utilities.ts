import { City, WeatherDateSeries } from '../models/models';

export function calculateMostPrevalentPrecipitationType(
  precArray: string[]
): string {
  precArray.sort();
  let maxString = precArray[0];
  let maxUnchangedCount = 0;
  let currentCount = 0;
  let currentString = precArray[0];
  for (let current of precArray) {
    if (current === currentString) {
      currentCount++;
    } else {
      if (currentCount > maxUnchangedCount) {
        maxUnchangedCount = currentCount;
        maxString = currentString;
      }
      currentCount = 1;
      currentString = current;
    }
  }
  if (currentCount > maxUnchangedCount) {
    maxUnchangedCount = currentCount;
    maxString = currentString;
  }

  return maxString;
}

// function that takes cloud cover, precipitation and time to get related status
export function calculateCurrentWeatherStatus(
  cloudCover: number,
  precType: string
): string {
  let status: string;

  if (precType === 'rain') {
    status = 'Raining';
  } else if (precType === 'snow') {
    status = 'Snowing';
  } else {
    if (cloudCover < 3) {
      status = 'Clear Skies';
    } else if (cloudCover > 7) {
      status = 'Cloudy';
    } else {
      status = 'Partly Cloudy';
    }
  }
  return status;
}

// function to return day of the week
export function returnDayOfTheWeek(day: number): string {
  switch (day) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
      return 'none';
  }
}

// set the single object related to the current time
export function setCurrentWeatherObject(
  weatherData: WeatherDateSeries[],
  time: number,
  gmtDiff: number
) {
  let cityWeather: WeatherDateSeries = {} as WeatherDateSeries;

  weatherData.map((data: WeatherDateSeries) => {
    const timepointPlusGmt = data.timepoint + gmtDiff;
    const cityTimePlusGmt = time + gmtDiff;
    if (
      cityTimePlusGmt - 1 <= timepointPlusGmt &&
      cityTimePlusGmt + 1 >= timepointPlusGmt
    ) {
      // function that returns speed in relation to wind speed rating
      cityWeather = data;
    }
  });

  return cityWeather;
}

// max temp from temp array
export function calculateMaxTemp(weatherData: WeatherDateSeries[]): number {
  const temperatureSet: number[] = [];
  weatherData.map((data) => temperatureSet.push(data.temp2m));
  return Math.min(...temperatureSet);
}

// min temp from temp array
export function calculateMinTemp(weatherData: WeatherDateSeries[]): number {
  const temperatureSet: number[] = [];
  weatherData.map((data) => temperatureSet.push(data.temp2m));
  return Math.max(...temperatureSet);
}

// return the date
export function setTimePointDate(
  weatherPointData: WeatherDateSeries,
  selectedCity: City
): String {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date();
  const currentHours = date.getHours();
  const newDate = addHours(date, -currentHours);
  const currentDate = addHours(
    newDate,
    weatherPointData.timepoint + selectedCity.gmtDiff
  );
  const dateString = `${currentDate.getDate().toString().padStart(2, '0')} ${
    month[currentDate.getMonth()]
  } `;
  return dateString;
}

// return time as hours
export function setTimePointHours(
  weatherPointData: WeatherDateSeries,
  selectedCity: City
): number {
  const date = new Date();
  const currentHours = date.getHours();
  const newDate = addHours(date, -currentHours);
  const currentDate = addHours(
    newDate,
    weatherPointData.timepoint + selectedCity.gmtDiff
  );
  return currentDate.getHours();
}
// function to add hours to any date
function addHours(date: Date, hours: number): Date {
  date.setHours(date.getHours() + hours);

  return date;
}

// Time string output with am or pm
export function setTimePointString(time: number) {
  let timeString;
  if (time > 12) {
    timeString = `${(time - 12).toString().padStart(2, '0')} PM`;
  } else {
    timeString = `${time.toString().padStart(2, '0')} AM`;
  }

  return timeString;
}
