/*******************************************************************************
 * Copyright (c) 2021 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 ******************************************************************************/
import React from 'react';
import {Switch, Route,} from 'react-router-dom';
import {AsteroidsList} from "../AsteroidsList/AsteroidsList";
import {Destroyment} from "../Destoyment/Destroyment";
import {Asteroid} from "../Asteroid/Asteroid";


export function AppRouter() {

    return (
        <Switch>
            <Route exact path="/asteroids">
                <AsteroidsList />
            </Route>

            <Route path="/destroyment">
                <Destroyment />
            </Route>

            <Route path="/asteroids/:asteroidId">
                <Asteroid/>
            </Route>
        </Switch>
    );
}

