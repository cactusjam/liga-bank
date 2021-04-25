import React, {useState} from 'react';
import { ServicesItems, Tabs } from "../../const";
import ServicesItem from "../services-item/services-item";
import ServicesDescription from "../services-description/services-description";

const Services = () => {
  const [activeTab, setActiveTab] = useState(Tabs.VAULT);

  const handleButtonClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className='services container'>
      <ul className='services__list'>
        {Object.entries(ServicesItems).map(([tabKey, item], i) => (
          <ServicesItem
            key={i + 1}
            servicesData={item}
            onClick={() => handleButtonClick(tabKey)}
            activeTab={tabKey === activeTab}
          />
        ))}
      </ul>
      <ServicesDescription activeTab={activeTab} />
    </div>
  );
}

export default Services
