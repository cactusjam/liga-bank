import React from 'react';
import SliderItem from "../slider-item/slider-item";
import SliderNav from "../slider-nav/slider-nav";
import { SliderItems } from "../../const";


const Slider = () => {
  const slidesLength = Object.keys(SliderItems).length;

  return (
    <div className='slider container'>
      <ul className='slider__list'>
        {Object.values(SliderItems).map((item, i) => (
          <SliderItem key={i + 1} title={item.TITLE} titleBtn={item.TITLE_BTN} />
        ))}
      </ul>
      <SliderNav slidesLength={slidesLength} />
    </div>
  );
};

export default Slider;
