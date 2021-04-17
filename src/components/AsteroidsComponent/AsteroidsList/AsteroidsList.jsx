import React, {useContext, useEffect} from "react";
import {AsteroidCard} from "../AsteroidCard/AsteroidCard";
import {FilterContext} from "../Asteroids/Asteroids";

export function AsteroidsList (props) {
    let { asteroids } = props;

    const context = useContext(FilterContext);
    const { onlyDangerous } = context;

    if (onlyDangerous) {
        asteroids = asteroids.filter (item => item.isDangerous);
    }

    return asteroids.map((item, index) => <AsteroidCard key={index} {...item}/>);
}
