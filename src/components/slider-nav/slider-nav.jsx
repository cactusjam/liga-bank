import React from 'react';
import { SliderItems } from "../../const";

const SliderNav = ({slidesLength}) => {
  // const indexes = [...Array(slidesLength)];
  const sliderKeys = Object.keys(SliderItems);

    return (
      <div className='slider__nav'>
        {sliderKeys.map((key) => {
          return (
            <button key={key}/>
          )
        })}
      </div>
    );
  }

export default SliderNav;
