import React from "react";
import style from './Ciudad.module.css'

export default function Ciudad({city}) {
        return (
            <div className={style.container}>
                    <div className={style.card}>
                        <h2 className={style.name}>{city.name}</h2>
                        <div className="info">
                            <div> <b>Temperatura:</b> {city.temp} ºC</div>
                            <div><b>Clima:</b> {city.weather}</div>
                            <div><b>Viento:</b> {city.wind} km/h</div>
                            <div><b>Cantidad de nubes:</b> {city.clouds}</div>
                            <div><b>Latitud:</b> {city.latitud}º</div>
                            <div><b>Longitud:</b> {city.longitud}º</div>
                        </div>
                </div>
            </div>
        )

    
}