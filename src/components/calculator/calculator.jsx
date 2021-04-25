import React, { useState } from 'react';
import CalculatorParameter from '../calculator-parameter/calculator-parameter';

const Calculator = () => {
  const [value, setValue] = useState('target');

  const handleValueChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className='calculator container'>
      <h3 className='calculator__title'>Кредитный калькулятор</h3>
      <p className='calculator__text'>Шаг 1. Цель кредита</p>
      <div className='calculator__target' onChange={handleValueChange}>
        <div className='calculator__target-wrapper'>
          <input type='radio' name='TARGET' value={value} id='TARGET[target]' defaultChecked />
          <label htmlFor='TARGET[target]'>Выберите цель кредита</label>

          <input type='radio' name='TARGET' value='mortgage' id='TARGET[mortgage]' />
          <label htmlFor='TARGET[mortgage]'>Ипотечное кредитование</label>

          <input type='radio' name='TARGET' value='auto' id='TARGET[auto]' />
          <label htmlFor='TARGET[auto]'>Автомобильное кредитование</label>

          <input type='radio' name='TARGET' value='consumer' id='TARGET[consumer]' />
          <label htmlFor='TARGET[consumer]'>Потребительский кредит</label>
        </div>
      </div>
      <CalculatorParameter />
    </div>
  );
}

export default Calculator;
