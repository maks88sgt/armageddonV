import {connect} from "react-redux";

import {AsteroidsList} from "./AsteroidsList";
import {fetchAsteroidsData} from "../../../redux/asteroid.actions";

const mapStateToProps = state => {
    return {
        asteroids: state.asteroids,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAsteroidsData: () => dispatch(fetchAsteroidsData()),
    };
};

export const AsteroidsListContainer = connect(mapStateToProps, mapDispatchToProps)(AsteroidsList);
