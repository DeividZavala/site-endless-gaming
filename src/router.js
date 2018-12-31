import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import TeamPage from './containers/TeamPage/TeamPage';
import PlayerPage from './containers/PlayerPage/PlayerPage';
import NewsPage from './containers/News/News';
import TeamsPage from "./containers/TeamsPage/TeamsPage";
import MatchesPage from "./containers/MatchesPage/MatchesPage";
import MatchPage from './containers/MatchPage/MatchPage';


const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/team" component={TeamsPage}/>
        <Route exact path="/team/:game" component={TeamPage}/>
        <Route exact path="/team/:game/player/:nickname" component={PlayerPage}/>
        <Route exact path="/news" component={NewsPage}/>
        <Route exact path="/all-matches" component={MatchesPage}/>
        <Route exact path="/match/:id" component={MatchPage}/>
    </Switch>
);
export default Router;