import React from 'react';
import { ServicesDescriptionItems } from "../../const";
import ServicesDescriptionItem from "../services-description-item/services-description-item";

const ServicesDescription = ({ activeTab }) => {
  const itemData = ServicesDescriptionItems[activeTab];

  return (
    <div className='services__description'>
      <ul className='services__description-list'>
        <ServicesDescriptionItem servicesDescriptionData={itemData} />
      </ul>
      <div className={itemData.span? 'services__description-banner services__description-banner--hidden' : 'services__description-banner services__description-banner--visible'}>
        {itemData.span? <p>3 000 000 <span>на любые цели</span></p> : '' }
      </div>
    </div>
  );
}

export default ServicesDescription;
