import {fetchAsteroidsData} from "../../../redux/asteroid.actions";
import {connect} from "react-redux";

import {Asteroids} from "./Asteroids";

const mapDispatchToProps = dispatch => {
    return {
        fetchAsteroidsData: () => dispatch(fetchAsteroidsData()),
    };
};

export const AsteroidsContainer = connect(null, mapDispatchToProps)(Asteroids);
