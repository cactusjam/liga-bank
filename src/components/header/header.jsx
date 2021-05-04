import React from 'react';
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

const Header = () => {

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo />
        <Navigation header={true}/>
      </div>
    </header>
  );
};

export default Header;
