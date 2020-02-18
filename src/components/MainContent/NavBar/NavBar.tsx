import React from "react";
import "./NavBar.css";

type LinkProps = {
  text: string;
  href: string;
};
const Link: React.FC<LinkProps> = ({ text, href }) => {
  return (
    <a className="content_nav__link_item" href={href}>
      {text}
    </a>
  );
};

export const NavBar: React.FC = () => {
  return (
    <nav className="content_nav__link">
      <Link href={"/"} text={"Туры"} />
      <Link href={"/"} text={"Визы"} />
      <Link href={"/"} text={"Отели"} />
      <Link href={"/"} text={"Авиабилеты"} />
      <Link href={"/"} text={"Турфирмы"} />
    </nav>
  );
};
