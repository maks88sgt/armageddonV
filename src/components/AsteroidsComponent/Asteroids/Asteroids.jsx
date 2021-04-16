import React from "react";
import {AsteroidsListContainer} from "../AsteroidsList/AsteroidsList.container";
import {AsteroidsHeader} from "../AsteroidsHeader/AsteroidsHeader";

export function Asteroids (props) {
    return (
        <>
            <AsteroidsHeader/>
            <AsteroidsListContainer/>
        </>
    );
}
