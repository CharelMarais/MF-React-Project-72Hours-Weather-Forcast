import { cityVariables } from '../data/city-info';
import { City } from '../models/models';
import { BiCaretDown } from 'react-icons/bi';

interface ISelectListProps {
  selectedCity: City;
  callback: (city: City) => void;
}

function SelectList({ selectedCity, callback }: ISelectListProps) {
  return (
    <div>
      <div className="dropdown w-full ">
        <label
          tabIndex={0}
          className="btn w-full bg-[#232634] border-none text-slate-200 text-lg capitalize">
          {selectedCity.name}
          <BiCaretDown className="ml-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full ">
          {cityVariables.map((city) => {
            return (
              <li
                className={city.id === selectedCity.id ? 'bg-white/10' : ''}
                onClick={() => callback(city)}
                key={city.id}>
                <a>{city.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SelectList;
