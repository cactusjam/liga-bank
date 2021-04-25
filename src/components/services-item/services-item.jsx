import React from 'react';
import PropTypes from 'prop-types';

const ServicesItem = ({ onClick, servicesData, activeTab }) => {
  const { title, img } = servicesData;

  return (
    <li className='services__item'>
      <button className={activeTab ? 'services__link--active' : 'services__link' } onClick={onClick}>
        {img}
        {title}
      </button>
    </li>
  )
};

ServicesItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default ServicesItem;


