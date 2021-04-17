import React, {useContext} from "react";

import {FilterContext} from "../Asteroids/Asteroids";
import {AsteroidCardContainer} from "../AsteroidCard/AsteroidCard.container";

export function AsteroidsList (props) {
    let { asteroids } = props;

    const context = useContext(FilterContext);
    const { onlyDangerous } = context;

    if (onlyDangerous) {
        asteroids = asteroids.filter (item => item.isDangerous);
    }

    return asteroids.map((item, index) => <AsteroidCardContainer key={index} {...item}/>);
}
