import React from 'react';
import MapGoogle from '../map/map';

const MapContainer = () => {
  return (
    <div className='map container' >
      <h2>Отделения Лига Банка</h2>
      <div className='map__wrapper'>
        <ul className='map__wrapper-list map__wrapper-list--city'>
          <li>
            <input type='checkbox' name='russia' value='russia' id='russia' className='map__input' />
            <label htmlFor=''>Россия</label>
            <input type='checkbox' name='sng' value='sng' id='sng' />
            <label htmlFor=''>СНГ</label>
            <input type='checkbox' name='europe' value='europe' id='europe' />
            <label htmlFor=''>Европа</label>
          </li>
        </ul>
        <ul className='map__wrapper-list map__wrapper-list--office'>
          <input type='checkbox' name='office' value='office' id='office' />
          <label htmlFor='office'>Офисы</label>
          <input type='checkbox' name='atm' value='atm' id='atm' />
          <label htmlFor='atm'>Банкоматы</label>
        </ul>
      </div>
      <MapGoogle />
    </div>
  );
}

export default MapContainer;
