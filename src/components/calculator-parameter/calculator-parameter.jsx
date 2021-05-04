import React, { useState } from 'react';

const CalculatorParameter = () => {
  const [coast, setCoast] = useState(2000000);
  const [time, setTime] = useState(5);
  const [range, setRange] = useState(10);

  const handleCoastChange = (event) => {
    setCoast(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  }

  return (
    <div className='calculator__parameter'>
      <p className='calculator__text'>Шаг 2. Введите параметры кредита</p>
      <div className='calculator__parameter-coast'>
        <label htmlFor='coast'>Стоимость недвижимости</label>
        <button className='calculator__parameter-btn calculator__parameter-btn--minus' onClick={() => setCoast(coast - 100000)}></button>
        <input type='text' className='calculator__coast-input' min='1200000' max='25000000' name='coast' value={`${coast} рублей`} id='coast' onChange={handleCoastChange} />
        <button className='calculator__parameter-btn calculator__parameter-btn--plus' onClick={() => setCoast(coast + 100000)}></button>
        <span>От 1 200 000  до 25 000 000 рублей</span>
      </div>
      <div className='calculator__parameter-deposit'>
        <label htmlFor='deposit'>Первоначальный взнос</label>
        <input type='text' className='calculator__deposit-input' name='deposit' value={`${coast * (range/100)} рублей`} id='deposit' onChange={handleCoastChange} />

        <input type="range" min='10' step='5' value={`${range}`} className="calculator__parameter-range" id="range" onChange={handleRangeChange} />
        <label htmlFor="range">{`${range} %`}</label>

      </div>
      <div className='calculator__parameter-time'>
        <label htmlFor='time'>Срок кредитования</label>
        <input type='text' className='calculator__time-input' name='time' value={`${time} лет`} id='time' onChange={handleTimeChange} />
        <input type="range" min='5' step='10' value={`${time}`} className="calculator__parameter-range" id="timeRange" onChange={handleTimeChange} />
        <label htmlFor="timeRange">{`${time} лет`}</label>
      </div>
      <input type='checkbox' name='capital' defaultValue='capital' id='capital' />
      <label htmlFor='capital'>Использовать материнский капитал</label>
    </div>
  );
}

export default CalculatorParameter
