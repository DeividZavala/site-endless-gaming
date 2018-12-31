import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../src/containers/Home/Home';
import TeamPage from '../src/containers/TeamPage/TeamPage';
import PlayerPage from './containers/PlayerPage/PlayerPage';
import NewsPage from './containers/News/News';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/team/:game" component={TeamPage}/>
        <Route exact path="/team/:game/player/:nickname" component={PlayerPage}/>
        <Route exact path="/news" component={NewsPage}/>
    </Switch>
);
export default Router;