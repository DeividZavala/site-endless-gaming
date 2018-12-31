import React, {Component} from 'react';
import MatchesDisplay from '../../components/MatchesPage/MatchesDisplay';
import SectionHeader from "../../components/common/SectionHeader";
import PlayerCard from "../../components/TeamPage/PlayerCard";
import './MatchPage.css';
import MapCard from "../../components/MatchPage/MapCard";

class MatchPage extends Component{

    constructor(){
        super();
        this.state = {
            game : "call-of-duty",
            players: [
                {
                    name: "Jared",
                    lastname: "Calderon",
                    profilePicture: "https://1lal3e4eckus2d9p8g17wl8c-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Scump-CWL.jpg",
                    role: "Team Lead",
                    nickname: "Slayer"
                },
                {
                    name: "Rafael",
                    lastname: "Anaya",
                    profilePicture: "https://i.ytimg.com/vi/-9EnirAgfq8/maxresdefault.jpg",
                    role: "Strategier",
                    nickname: "Triiz"
                },
                {
                    name: "Roberto",
                    lastname: "González",
                    profilePicture: "https://esports.as.com/2017/06/28/call-of-duty/maxresdefault_1039706028_9011_1440x600.jpg",
                    role: "Jumper",
                    nickname: "Romo"
                },
                {
                    name: "Rodrigo",
                    lastname: "Armendáriz",
                    profilePicture: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/player-profile-1.jpg",
                    role: "Shooter",
                    nickname: "Ruper"
                },
                {
                    name: "Jared",
                    lastname: "Calderon",
                    profilePicture: "https://image.redbull.com/rbcom/010/2015-03-25/1331713378495_2/0100/0/1/crimsix-is-one-of-the-winningest-cod-players-ever.jpg",
                    role: "Ingame Rifler",
                    nickname: "Panda"
                }
            ]
        }
    }

    render() {
        const {game} = this.props;
        return(
            <div className="uk-section match-page">
                <div className="uk-container">
                    <section id="match-details">

                        <div className="container bg"
                             style={{backgroundImage: `url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/themes/pixiehuge/images/match-bg.jpg')`}}>

                            <article className="head">
                                <div className="line"></div>
                                <div className="content">
                                    <span className="info">Online</span>
                                    <h3 className="title">SL i-League StarSeries S3</h3>
                                    <span className="subtitle">Season 2 April 2017</span>
                                </div>
                                <div className="line"></div>
                            </article>

                            <article className="middle">
                                <div className="team home">
                                    <div className="name">
                                        <h5>Midnight Turtles</h5>
                                        <h6>Triple European Winners</h6>
                                    </div>
                                    <figure>
                                        <img
                                            src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                                            alt="Team&#039;s logo" />
                                    </figure>
                                </div>

                                <div className="details">
                                    <h5>Vainglory</h5>
                                    <span className="date">June 16, Friday 02:05</span>

                                    <span className="type">Best out of 3</span>

                                    <a href="https://www.twitch.tv/cohhcarnage" className="stream twitch">twitch</a>
                                </div>

                                <div className="team away">
                                    <figure>
                                        <img
                                            src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                                            alt="Team&#039;s logo" />
                                    </figure>
                                    <div className="name">
                                        <h5>Rhyno Domynos</h5>
                                        <h6>Two time world champions</h6>
                                    </div>
                                </div>
                            </article>

                            <article className="footer">
                                <div className="middle">
                                    <span className="final">Final Result</span>
                                    <span className="score">0 - 1</span>
                                    <a href="http://www.facebook.com/sharer.php?s=100&#038;p%5Btitle%5D=Match%20page%20-%20Midnight%20Turtles%20vs%20Rhyno%20Domynos&#038;p%5Burl%5D="
                                       className="facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook"></i> Share </a>
                                    <a href="https://twitter.com/share?url=&#038;text=Match%20page%20-%20Midnight%20Turtles%20vs%20Rhyno%20Domynos"
                                       className="twitter" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-twitter"></i> Tweet </a>
                                </div>
                            </article>
                        </div>

                    </section>

                    <div className="uk-margin-medium-top">
                        <SectionHeader title="Roster de equipos"/>

                        <ul className="uk-tab" uk-switcher="animation: uk-animation-fade">
                            <li><a href="#">Endless Gaming</a></li>
                            <li><a href="#">Optic Gaming</a></li>
                        </ul>

                        <ul className="uk-switcher uk-margin">
                            <li>
                                <div className="uk-grid uk-child-width-1-5@m roster uk-grid-small" uk-grid="true">
                                    {this.state.players.map((player, index) => <PlayerCard game={game} {...player} key={index} />)}
                                </div>
                            </li>
                            <li>
                                <div className="uk-grid uk-child-width-1-5@m roster uk-grid-small" uk-grid="true">
                                    {this.state.players.map((player, index) => <PlayerCard game={game} {...player} key={index} />)}
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className="uk-margin-medium-top">
                        <SectionHeader title="Mapas"/>

                        <div className="uk-grid-small uk-grid uk-child-width-1-3@m" uk-grid="true">
                            <MapCard/>
                        </div>

                    </div>

                    <div className="matches-section uk-margin-medium-top">
                        <MatchesDisplay/>
                    </div>

                </div>
            </div>
        )
    }
}

export default MatchPage;