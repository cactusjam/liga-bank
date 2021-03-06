import React from 'react';
import NavigationItem from "../navigation-item/navigation-item";
import { MENU_ITEMS } from "../../const";

const Navigation = ({header}) => {

  return (
    <nav className={header? "header__navigation navigation" : "header__navigation navigation footer__block"}>
      <ul className={header? "navigation__list navigation__list--main" : "navigation__list navigation__list--footer"}>
        {MENU_ITEMS.map((item, i) => (
          <NavigationItem key={i + 1} title={item} />
        ))}
      </ul>
      <ul className={header? "navigation__list navigation__list--user" : "visually-hidden"}>
        <li className="navigation__item navigation__item--user">
          <a className="navigation__link navigation__link--user" href="/">
            Войти в Интернет-банк
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
