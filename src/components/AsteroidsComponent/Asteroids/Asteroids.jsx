import React, {createContext, useEffect, useState} from "react";
import {AsteroidsListContainer} from "../AsteroidsList/AsteroidsList.container";
import {AsteroidsHeader} from "../AsteroidsHeader/AsteroidsHeader";
import './../../../styles/_list.scss';
import classNames from "classnames";

export const FilterContext = createContext();

export function Asteroids(props) {
    const {fetchAsteroidsData} = props

    useEffect(() => {
            fetchAsteroidsData();
        }, [fetchAsteroidsData]
    )

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceInKilometers, setDistanceInKilometers] = useState(true);

    const contextObj = {
        onlyDangerous,
        setOnlyDangerous,
        distanceInKilometers,
        setDistanceInKilometers
    };

    return (
        <FilterContext.Provider value={contextObj}>
            <AsteroidsHeader/>
            <AsteroidsListContainer/>
        </FilterContext.Provider>
    );
}
