import React from "react";
import "./Header.css";
import { ReactComponent as Pic1 } from "./pics/pic1.svg";
import { ReactComponent as Pic2 } from "./pics/pic2.svg";
import { ReactComponent as Pic3 } from "./pics/pic3.svg";
import { ReactComponent as Pic4 } from "./pics/pic4.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav__link">
        <a href="#">Реклама</a>
        <a href="#">Контакты</a>
      </nav>
      <nav className="nav__link">
        <div>
          <Pic1 className="nav__icon" />
          <a href="#">Блог</a>
        </div>
        <div>
          <Pic2 className="nav__icon" />
          <a href="#">Путеводитель</a>
        </div>
        <div>
          <Pic3 className="nav__icon" />
          <a href="#">Попутчики</a>
        </div>
        <div>
          <Pic4 className="nav__icon" />
          <a href="#">Отдых в Беларуси</a>
        </div>
      </nav>
      <nav className="nav__link">
        <a className="nav__signup" href="#">
          Регистрация
        </a>
        <a className="nav__signin" href="#">
          Вход
        </a>
      </nav>
    </header>
  );
}
