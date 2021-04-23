import {connect} from "react-redux";

import { Destroyment } from "./Destroyment";
import {Asteroid} from "../../redux/asteroid.reducer";
import {AppStateType} from "../../config/configureRedux";

export type DestroymentProps = {
    asteroidsForDestroying: Array<Asteroid>,
}

function mapStateToProps (state: AppStateType): DestroymentProps {
    const { asteroids, forDestroying } = state.asteroidReducer;
    const asteroidsForDestroying = asteroids.filter((item: Asteroid) => forDestroying.includes(item.id));
    return {
        asteroidsForDestroying,
    };
};

const DestroymentContainer  = connect (mapStateToProps)(Destroyment);

export { DestroymentContainer };
