import React from "react";
import "./NavBar.css";

const Link = ({ text, href }) => {
  return (
    <a className="content_nav__link_item" href={href}>
      {text}
    </a>
  );
};

export default function NavBar() {
  return (
    <nav className="content_nav__link">
      <Link href={"#"} text={"Туры"} />
      <Link href={"#"} text={"Визы"} />
      <Link href={"#"} text={"Отели"} />
      <Link href={"#"} text={"Авиабилеты"} />
      <Link href={"#"} text={"Турфирмы"} />
    </nav>
  );
}
