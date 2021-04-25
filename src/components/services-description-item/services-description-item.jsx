import React from 'react';

const ServicesDescriptionItem = ({ servicesDescriptionData }) => {
  const { title, list, link, tab, span } = servicesDescriptionData;

  return (
    <li className={`services__description-item ${tab}`}>
      <h2 className='services__description-title'>{title}</h2>
      <ul className='services__advantages'>
        {list.map((someText, i) => (
          <li className='services__advantages-item' key={i + 1}>{someText}</li>
        ))}
      </ul>
      <span className='services__advantages-text'>{span}
        {span
          ? <a className='services__advantages-link' href='/'>{link}</a>
          : <a className='services__advantages-btn' href='/'>{link}</a>}
      </span>
    </li>
  );
}

export default ServicesDescriptionItem;
