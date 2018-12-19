import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../src/containers/Home/Home';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
);
export default Router;