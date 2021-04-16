import React from "react";

import styles from './AsteroidCard.module.css'

export function AsteroidCard(props) {
    const {name, isDangerous, diameter, minRange, minRangeDate} = props;

    const dangerousLabel = isDangerous ? 'Опасен' : 'Не опасен';

    return (
        <div className={styles.container}>
            <div className="leftBlock">
                <img src='./../../../images/dino.svg' alt='dino'/>
            </div>
            <div className="">
                <h5>{name}</h5>
                <p>Дата <span>{minRangeDate}</span></p>
                <p>Расстояние <span>{minRange.kilometers}</span></p>
                <p>Размер <span>{diameter}</span></p>
            </div>
            <div className="">
                <p>Оценка <span>{dangerousLabel}</span></p>
                <button>На уничтожение</button>
            </div>
        </div>
    );
}
