import {connect} from "react-redux";
import {addAsteroidForDestroying} from "../../../redux/asteroid.actions";
import {AsteroidCard} from "./AsteroidCard";

const mapDispatchToProps = dispatch => {
    return {
        addAsteroidForDestroying: (id) => dispatch(addAsteroidForDestroying(id)),
    };
};

export const AsteroidCardContainer = connect(null, mapDispatchToProps)(AsteroidCard);
