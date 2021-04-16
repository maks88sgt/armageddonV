import { useState} from "react";
import classNames from "classnames";
import './../../../styles/_distance.scss'

export function AsteroidsHeader() {
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceInKilometers , setDistanceInKilometers] = useState(true);

    const classForDistanceInKm = classNames({
        'kilometers': distanceInKilometers,
    })

    const classForDistanceInLunar = classNames({
        'kilometers': !distanceInKilometers,
    })


    return (
        <>
            <div onClick={() => setOnlyDangerous(!onlyDangerous)}>
                <input type="checkbox"
                       className="styled-checkbox_input"
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
