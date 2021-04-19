import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


import {Asteroids} from "../AsteroidsComponent/Asteroids/Asteroids";
import {AsteroidsContainer} from "../AsteroidsComponent/Asteroids/Asteroids.container";
import {DestroymentContainer} from "../Destoyment/Destroyment.container";


export function AppRouter() {

    return (
        <Switch>

            <Route exact path="/asteroids">
                <AsteroidsContainer/>
            </Route>

            <Route exact path="/destroyment">
                <DestroymentContainer/>
            </Route>

            <Route path="/asteroids/:asteroidId">
                <Asteroids/>
            </Route>

            <Route exact path="/">
                <Redirect to="/asteroids"/>
            </Route>

            <Route path="*">
                <Redirect to="/asteroids"/>
            </Route>

        </Switch>
    );
}

