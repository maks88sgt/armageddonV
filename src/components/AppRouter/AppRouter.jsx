/*******************************************************************************
 * Copyright (c) 2021 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 ******************************************************************************/
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Destroyment} from "../Destoyment/Destroyment";
import {Asteroids} from "../AsteroidsComponent/Asteroids/Asteroids";
import {AsteroidsContainer} from "../AsteroidsComponent/Asteroids/Asteroids.container";


export function AppRouter() {

    return (
        <Switch>

            <Route exact path="/asteroids">
                <AsteroidsContainer/>
            </Route>

            <Route exact path="/destroyment">
                <Destroyment/>
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

