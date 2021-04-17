import {useContext, useState} from "react";
import classNames from "classnames";
import './../../../styles/_distance.scss'
import {FilterContext} from "../Asteroids/Asteroids";

export function AsteroidsHeader() {
    const context = useContext(FilterContext);
    const {distanceInKilometers, setDistanceInKilometers, onlyDangerous, setOnlyDangerous} = context;

    const classForDistanceInKm = classNames({
        'kilometers': distanceInKilometers,
    })

    const classForDistanceInLunar = classNames({
        'kilometers': !distanceInKilometers,
    })


    return (
        <>
            <div >
                <input type="checkbox"
                       className="styled-checkbox_input"
                       onChange={() => setOnlyDangerous(!onlyDangerous)}
                       checked={onlyDangerous}
                />
                Показать только опасные
            </div>
            <div>
                <p>Расстояние <span className={classForDistanceInKm} onClick={() => setDistanceInKilometers(true)}>в километрах</span>,
                    <span className={classForDistanceInLunar} onClick={() => setDistanceInKilometers(false)}>в дистанциях до луны</span>
                </p>
            </div>
        </>
    );
}
