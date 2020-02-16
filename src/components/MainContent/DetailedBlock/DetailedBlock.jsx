import React from "react";
import "./DetailedBlock.css";
import Slider from "./Slider";
import Rating from "./Rating";
import { ReactComponent as Icon1 } from "./pics/icon1.svg";
import { ReactComponent as Icon2 } from "./pics/icon2.svg";

export default function DetailedBlock() {
  return (
    <div className="main_container">
      <div className="slider_container">
        <Slider />
      </div>
      <div className="description_container">
        <h2 className="description__header">
          Тур в отель Gelina Village Hotel Resort&Spa
        </h2>
        <div className="description__id">№141378</div>
        <div className="description__rating">
          <Rating />
        </div>
        <div className="description__navigation">
          <div>Греция > Пелопоннес-Илия </div>
          <div>Нет такого тура ?</div>
        </div>
        <div className="grid">
          <div className="grid_box1">
            <div className="grid_box1__header">12 дней / 11 ночей</div>
            <div className="grid_box1__text">
              31 августа 2018 – 11 cентября 2018
            </div>
            <div className="grid_box1__text">Питание: All (все включено)</div>
          </div>

          <div className="grid_box2">
            <div className="grid_box2_header">1 970</div>
            <div className="grid_box2_val">
              <div>BYN</div>
              <div>88$</div>
            </div>

            <div className="grid_box2_description">Цена за человека</div>
          </div>
          <div className="grid_box3">
            <div className="grid_box3__icon">
              <Icon1 />
            </div>
            <div className="grid_box3__icon">
              <Icon2 />
            </div>
          </div>
          <div className="grid_box4">
            <div className="grid_box4_header">1 970</div>
            <div className="grid_box4_val">
              <div>BYN</div>
              <div>88$</div>
            </div>

            <div className="grid_box4_description">Цена за человека</div>
          </div>
        </div>
      </div>
      <div className="main_description">ООО «АЭРОТРЕВЕЛ»</div>
      <div className="main__buttons">
        <button className="main__button grey">Заказать тур</button>
        <button className="main__button blue">Перезвонить мне </button>
      </div>
    </div>
  );
}
