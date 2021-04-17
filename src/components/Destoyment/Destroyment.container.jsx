
import {connect} from "react-redux";
import {Destroyment} from "./Destroyment";

const mapStateToProps = state => {
    const { asteroids, forDestroying } = state
    const asteroidsForDestroying = asteroids.filter((item) => forDestroying.includes(item.id));
    return {
        asteroidsForDestroying,
    };
};

export const DestroymentContainer = connect(mapStateToProps)(Destroyment);
