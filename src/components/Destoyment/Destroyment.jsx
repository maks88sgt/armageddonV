import React from "react";
import {AsteroidCardContainer} from "../AsteroidsComponent/AsteroidCard/AsteroidCard.container";

export function Destroyment (props) {
    const { asteroidsForDestroying } = props;

    return (
        <div>
            {asteroidsForDestroying.map((item, index) => <div key={index}>  {item.name} </div>)}
        </div>
    );
}
