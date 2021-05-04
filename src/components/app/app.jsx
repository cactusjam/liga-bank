import React, {Fragment} from 'react';
import Header from "../header/header";
import Slider from "../slider/slider";
import Services from "../services/services";
import Calculator from '../calculator/calculator';
import MapContainer from '../map-container/map-container';
import Footer from '../footer/footer';

const App = () => {

  return (
    <Fragment>
      <Header />
      <Slider />
      <Services />
      <Calculator />
      <MapContainer />
      <Footer />
    </Fragment>
  );
};

export default App;
