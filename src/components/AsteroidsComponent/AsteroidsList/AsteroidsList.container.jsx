import {connect} from "react-redux";

import {AsteroidsList} from "./AsteroidsList";

const mapStateToProps = state => {
    return {
        asteroids: state.asteroids,
    };
};


export const AsteroidsListContainer = connect(mapStateToProps)(AsteroidsList);
