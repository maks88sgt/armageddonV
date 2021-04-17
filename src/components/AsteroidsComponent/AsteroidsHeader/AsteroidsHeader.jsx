import {useContext} from "react";
import classNames from "classnames";
import '../../../styles/_distance.scss'
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
        <div className='container sticky-top bg-white position-static'>
            <div className='row row-cols-md-2 row-cols-sm-1'>
                <div className='col-md-6 col-sm-12'>
                    <input type="checkbox"
                           className="form-check-input"
                           onChange={() => setOnlyDangerous(!onlyDangerous)}
                           checked={onlyDangerous}
                    />
                    Показать только опасные
                </div>
                <div className='col-md-6 col-sm-12'>
                    <p>Расстояние <span className={classForDistanceInKm} onClick={() => setDistanceInKilometers(true)}>в километрах</span>,
                        <span className={classForDistanceInLunar} onClick={() => setDistanceInKilometers(false)}>в дистанциях до луны</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
