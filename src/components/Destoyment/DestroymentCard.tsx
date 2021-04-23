import * as React from "react";
import {Asteroid} from "../../redux/asteroid.reducer";

export function DestroymentCard (props: Asteroid) {
    const { name } = props;
    return (
        <div>
              {name}
        </div>
    );
}
