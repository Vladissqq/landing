import React from "react";
import "./ContactsBlock.css";
import { ReactComponent as Tg } from "./pics/telega.svg";
import { ReactComponent as Viber } from "./pics/viber.svg";
import { ReactComponent as Whatsapp } from "./pics/wazap.svg";

export const ContactsBlock: React.FC = () => {
  return (
    <div className="contacts_container">
      <div className="address_container contacts_block">
        <div className="addres_header contacts_header">Мы находимся:</div>
        <div className="addres_text contacts_text">
          г. Минск, пр-т Независимости 11-2-422
        </div>
      </div>
      <div className="timetable_container contacts_block">
        <div className="timetable_header contacts_header">Мы работаем:</div>
        <div className="timetable_text contacts_text">Сегодня до 19:00</div>
        <div className="timetable_links">
          <div className="timetable_links__text">Показать контакты</div>
          <Tg />
          <Viber />
          <Whatsapp />
        </div>
      </div>
      <div className="offers_container contacts_block">
        <div className="offers_text contacts_text">
          Акция от чешского оператора за самую низкую цену! Мультивиза без
          доплат в чистый паспорт (при раннем бронировании). Выходные дни в
          Праге с бесплатными экскурсиями 23, 30 ноября, 7, 14, 22 декабря.
        </div>
        <div className="offers_links">
          <div className="offers_links__description">Больше туров на сайте</div>
          <a className="offers_links__link" href="/">
            airtravel.by
          </a>
        </div>
      </div>
    </div>
  );
};
