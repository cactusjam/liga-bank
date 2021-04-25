import React, {Fragment} from 'react';
import Header from "../header/header";
import Slider from "../slider/slider";
import Services from "../services/services";
import Calculator from '../calculator/calculator';

const App = () => {

  return (
    <Fragment>
      <Header />
      <Slider />
      <Services />
      <Calculator />
    </Fragment>
  );
};

export default App;
