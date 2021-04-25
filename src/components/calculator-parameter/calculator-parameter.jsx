import React, { useState } from 'react';

const CalculatorParameter = () => {
  const [coast, setCoast] = useState('2 000 000');
  const [deposit, setDeposit] = useState('200 000');
  const [time, setTime] = useState('5');

  const handleCoastChange = (event) => {
    setCoast(event.target.value);
  }

  const handleDepositChange = (event) => {
    setDeposit(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  return (
    <div className='calculator__parameter'>
      <p className='calculator__text'>Шаг 2. Введите параметры кредита</p>
      <div className='calculator__parameter-coast'>
        <label htmlFor='coast'>Стоимость недвижимости</label>
        <button className='calculator__parameter-btn calculator__parameter-btn--minus'></button>
        <input type='text' name='coast' value={`${coast} рублей`} id='coast' onChange={handleCoastChange}/>
        <button className='calculator__parameter-btn calculator__parameter-btn--plus'></button>
        <span>От 1 200 000  до 25 000 000 рублей</span>
      </div>
      <div className='calculator__parameter-deposit'>
        <label htmlFor='deposit'>Первоначальный взнос</label>
        <input type='text' name='deposit' value={`${deposit} рублей`} id='deposit' onChange={handleDepositChange}/>
        {/* <span>10%</span> */}
        <input className='calculator__parameter-range' type="range" min="10" max="100" step="1" defaultValue="10"/>
      </div>
      <div className='calculator__parameter-time'>
        <label htmlFor='time'>Срок кредитования</label>
        <input type='text' name='time' value={`${time} лет`} id='time' onChange={handleTimeChange}/>
        <span>5 лет</span>
      </div>
        <input type='checkbox' name='capital' defaultValue='capital' id='capital' />
        <label htmlFor='capital'>Использовать материнский капитал</label>
    </div>
  );
}

export default CalculatorParameter
