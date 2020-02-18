import React from "react";
import "./Header.css";
import { ReactComponent as Pic1 } from "./pics/pic1.svg";
import { ReactComponent as Pic2 } from "./pics/pic2.svg";
import { ReactComponent as Pic3 } from "./pics/pic3.svg";
import { ReactComponent as Pic4 } from "./pics/pic4.svg";

type LinkWithIconProps = {
  icon: any;
  href: string;
  text: string;
};

const LinkWithIcon: React.FC<LinkWithIconProps> = ({ icon, href, text }) => {
  return (
    <div>
      {icon}
      <a href={href}>{text}</a>
    </div>
  );
};

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav__link">
        <a href="/">Реклама</a>
        <a href="/">Контакты</a>
      </nav>
      <nav className="nav__link">
        <LinkWithIcon
          icon={<Pic1 className="nav__icon" />}
          href={"/"}
          text={"Блог"}
        />
        <LinkWithIcon
          icon={<Pic2 className="nav__icon" />}
          href={"/"}
          text={"Путеводитель"}
        />
        <LinkWithIcon
          icon={<Pic3 className="nav__icon" />}
          href={"/"}
          text={"Попутчики"}
        />
        <LinkWithIcon
          icon={<Pic4 className="nav__icon" />}
          href={"/"}
          text={"Отдых в Беларуси"}
        />
      </nav>
      <nav className="nav__link">
        <a className="nav__signup" href="/">
          Регистрация
        </a>
        <a className="nav__signin" href="/">
          Вход
        </a>
      </nav>
    </header>
  );
};
