import React from "react";
import {AsteroidCard} from "../AsteroidCard/AsteroidCard";

export function AsteroidsList (props) {
    const { asteroids } = props;

    const listOfAsteroids = asteroids.map((item, index) => <AsteroidCard key={index} {...item}/>);

    return listOfAsteroids;
}
