import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../src/containers/Home/Home';
import TeamPage from '../src/containers/TeamPage/TeamPage';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/team/:game" component={TeamPage}/>
    </Switch>
);
export default Router;