import React from 'react';
import style from './Card.module.css'
import { Link } from "react-router-dom";

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={style.card}>
        <div id="closeIcon" className={style.btnContainer}>
            <button onClick={onClose} className={style.btn}>X</button>
        </div>
        <div>
        <Link to={`/ciudad/${id}`} >
  <h5 className={style.name} >{name}</h5>
</Link>
          <div className={style.info}>
            <div className={style.mt}>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className={style.mt}>
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className={style.containerImg}>
              <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
