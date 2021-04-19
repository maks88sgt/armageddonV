import React, {useContext} from "react";
import classNames from "classnames";
import '../../../styles/_card.scss';
import {FilterContext} from "../Asteroids/Asteroids";
import dino from './../../../images/dino.svg';

export function AsteroidCard(props) {
    const {id, name, isDangerous, diameter, minRange, minRangeDate, addAsteroidForDestroying} = props;

    const context = useContext(FilterContext);
    const {distanceInKilometers} = context;

    const cardDistance = distanceInKilometers ? `${minRange.kilometers} км` : `${minRange.lunar} расстояний до луны`


    const dangerousLabel = isDangerous ? 'Опасен' : 'Не опасен';

    const isDangerousStyle = classNames({
        'asteroid-card': true,
        'dangerous': isDangerous,
    })

    function mapDateToRussian (date) {
        const arr = date.split('-');
        const months = new Map([
            ['01', 'января'],
            ['02', 'февраля'],
            ['03', 'марта'],
            ['04', 'апреля'],
            ['05', 'май'],
            ['06', 'июня'],
            ['07', 'июля'],
            ['08', 'августа'],
            ['09', 'сенября'],
            ['10', 'октября'],
            ['11', 'ноября'],
            ['12', 'декабря'],
        ]);
        return `${arr[2]} ${months.get(arr[1])} ${arr[0]}`;
    }

    return (
        <div className={isDangerousStyle}>
            <div className='container row row-cols-md-3 row-cols-sm-1'>
                <div className="col-1 position-relative">
                    <img src={dino} alt="dino" className="position-absolute bottom-0 start-0"/>
                </div>
                <div className="">
                    <h5>{name}</h5>
                    <p>Дата <span>{mapDateToRussian(minRangeDate[0])}</span></p>
                    <p>Расстояние <span>{cardDistance}</span></p>
                    <p>Размер <span>{diameter}</span></p>
                </div>
                <div className="">
                    <p>Оценка <span>{dangerousLabel}</span></p>
                    <button className='btn btn-primary' onClick={() => addAsteroidForDestroying(id)}>На уничтожение</button>
                </div>
            </div>
        </div>
    );
}
