import * as React from "react";
import { DestroymentProps } from "./Destroyment.container";
import {DestroymentCard} from "./DestroymentCard";
import {Asteroid} from "../../redux/asteroid.reducer";

export const Destroyment: React.FC<DestroymentProps> = (props: DestroymentProps) => {
    const { asteroidsForDestroying } = props;

    return (
        <div>
            {asteroidsForDestroying.map((item: Asteroid, index: number) => <DestroymentCard key = {index} {...item}/>)}
        </div>
    );
}
