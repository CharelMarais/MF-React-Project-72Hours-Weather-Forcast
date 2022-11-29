import {
  TiWeatherCloudy,
  TiWeatherSnow,
  TiWeatherShower,
  TiWeatherSunny,
  TiWeatherNight,
} from 'react-icons/ti';

interface IIconSelectionProps {
  cloudCover: number;
  precType: string;
  time: number;
}

export function IconSelection({
  cloudCover,
  precType,
  time,
}: IIconSelectionProps) {
  if (precType === 'rain') {
    return <TiWeatherShower className="text-sky-700" />;
  } else if (precType === 'snow') {
    return <TiWeatherSnow className="text-slate-100" />;
  } else {
    if (time > 5 && time < 19) {
      // Day Time
      if (cloudCover < 3) {
        return <TiWeatherSunny className="text-amber-700" />;
      } else {
        return <TiWeatherCloudy className="text-zinc-500" />;
      }
    } else {
      // Night Time
      if (cloudCover < 3) {
        return <TiWeatherNight className="text-stone-200" />;
      } else {
        return <TiWeatherCloudy className="text-zinc-500" />;
      }
    }
  }
}
