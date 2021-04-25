import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveSlideIndex } from '../../store/actions';
import { getActiveSlideIndex} from '../../store/selectors';

const SliderItem = ({ activeSlideIndex, slideData, slideIndex }) => {
  const isActive = slideIndex === activeSlideIndex;

  const { title, titleBtn } = slideData;
  const isBtnShowing = titleBtn !== '';

  return (
    <li className={isActive? 'slider__item' : 'visually-hidden'}>
      <h1>Лига Банк</h1>
      <p>{title}</p>
      {isBtnShowing && (
        <a href='/' className='slider__button' type='button' aria-label={titleBtn}>{titleBtn}</a>
      )}
    </li>
  )
};

SliderItem.propTypes = {
  activeSlideIndex: PropTypes.number,
  slideIndex: PropTypes.number,
  slideData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  activeSlideIndex: getActiveSlideIndex(state)
});

const mapDispatchToProps = {
  setActiveSlideIndex
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderItem);
