import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="content_nav__link">
      <a className="content_nav__link_item" href="#">
        Туры
      </a>
      <a className="content_nav__link_item" href="#">
        Визы
      </a>
      <a className="content_nav__link_item" href="#">
        Отели
      </a>
      <a className="content_nav__link_item" href="#">
        Авиабилеты
      </a>
      <a className="content_nav__link_item" href="#">
        Турфирмы
      </a>
    </nav>
  );
}
