import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveSlideIndex } from '../../store/actions';
import { getActiveSlideIndex} from '../../store/selectors';

const SliderItem = ({ isActiveSlideIndex, setActiveSlideIndex, title, titleBtn }) => {

  return (
    <li className={isActiveSlideIndex? 'slider__item' : 'visually-hidden'}>
      <h1>Лига Банк</h1>
      <p>{title}</p>
      <button className='slider__button' type='button' aria-label={titleBtn}>{titleBtn}</button>
    </li>
  )
};

SliderItem.propTypes = {
  isActiveSlideIndex: PropTypes.bool,
  setActiveSlideIndex: PropTypes.func,
  title: PropTypes.string,
  titleBtn: PropTypes.string
};

const mapStateToProps = (state) => ({
  isActiveSlideIndex: getActiveSlideIndex(state)
});

const mapDispatchToProps = {
  setActiveSlideIndex
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderItem);
