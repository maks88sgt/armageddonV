import React, {useEffect} from "react";
import {AsteroidCard} from "../AsteroidCard/AsteroidCard";

export function AsteroidsList (props) {
    const { asteroids, fetchAsteroidsData } = props;

    useEffect(() => {
            fetchAsteroidsData();
        }
    )

    const listOfAsteroids = asteroids.map((item, index) => <AsteroidCard key={index} {...item}/>);

    return listOfAsteroids;
}