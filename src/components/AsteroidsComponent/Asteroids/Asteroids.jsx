import React, {useEffect} from "react";
import {AsteroidsListContainer} from "../AsteroidsList/AsteroidsList.container";
import {AsteroidsHeader} from "../AsteroidsHeader/AsteroidsHeader";

export function Asteroids (props) {
    const { fetchAsteroidsData } = props

    useEffect(() => {
            fetchAsteroidsData();
        }
    )
    return (
        <>
            <AsteroidsHeader/>
            <AsteroidsListContainer/>
        </>
    );
}
