import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import FlagIcon from '../../components/common/FlagIcon';
import SectionHeader from '../../components/common/SectionHeader';
import PlayerCard from '../../components/TeamPage/PlayerCard';
import './TeamPage.css';
import NewsCard from "../../components/news/newsCard";

class TeamPage extends Component{

    constructor(){
        super();
        this.state = {
            news: [
                {
                    title: "RENEGADES DEFEAT SIGNATURE; TO MINOR PLAYOFFS",
                    date: "June 16, 2017",
                    img: "http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post7.jpg",
                    category: "Call of duty"
                },
                {
                    title: "SCREAM: “NOW WE KNOW WE’RE CAPABLE OF",
                    date: "June 16, 2017",
                    img: "http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post8.jpg",
                    category: "Counter Strike"
                }
            ],
            players: [
                {
                    name: "Jared",
                    lastname: "Calderon",
                    profilePicture: "https://1lal3e4eckus2d9p8g17wl8c-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Scump-CWL.jpg",
                    role: "Team Lead",
                    nickname: "Slayer"
                },
                {
                    name: "Jared",
                    lastname: "Calderon",
                    profilePicture: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/player-profile.jpg",
                    role: "Strategier",
                    nickname: "Triiz"
                },
                {
                    name: "Jared",
                    lastname: "Calderon",
                    profilePicture: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Player-Profile-1.jpg",
                    role: "Jumper",
                    nickname: "Romo"
                },
                {
                    name: "Jared",
                    lastname: "Calderon",
                    profilePicture: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/player-profile-1.jpg",
                    role: "Shooter",
                    nickname: "Viper"
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

    render(){
        return(
            <div className="team-page uk-margin-large-bottom">
                <div className="cover-bg" style={{backgroundImage: `url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Cover-Team.jpg')`}}></div>
                <div className="team-profile">
                    <div className="uk-container">
                        <article className="team-info">
                            <div className="game" style={{backgroundImage: `url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/gamelogo1.png')`}}></div>
                            <div className="profile-details">
                                <figure>
                                    <img src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png" alt=""/>
                                </figure>
                                <div className="name">
                                    <h4>Rhyno Domynos</h4>
                                    <span className="subtitle">Two time world champions</span>
                                </div>
                            </div>
                        </article>

                        <div className="stats">

                            <ul className="left">
                                <li className="first">
                                    <span className="title">Our team&#039;s</span>
                                    <h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px">
                                            <path fillRule="evenodd"
                                                  d="M19.014,10.937 L18.021,10.937 C17.592,14.674 14.636,17.635 10.910,18.065 L10.910,19.062 C10.910,19.580 10.491,20.000 9.974,20.000 C9.458,20.000 9.039,19.580 9.039,19.062 L9.039,18.065 C5.313,17.635 2.357,14.674 1.928,10.937 L0.935,10.937 C0.419,10.937 -0.000,10.518 -0.000,10.000 C-0.000,9.482 0.419,9.062 0.935,9.062 L1.930,9.062 C2.359,5.326 5.312,2.363 9.039,1.933 L9.039,0.937 C9.039,0.420 9.458,-0.000 9.974,-0.000 C10.491,-0.000 10.910,0.420 10.910,0.937 L10.910,1.935 C14.636,2.365 17.592,5.326 18.021,9.062 L19.014,9.062 C19.531,9.062 19.949,9.482 19.949,10.000 C19.949,10.518 19.531,10.937 19.014,10.937 ZM14.338,9.062 L16.131,9.062 C15.725,6.363 13.601,4.233 10.910,3.826 L10.910,5.625 C10.910,6.142 10.491,6.562 9.974,6.562 C9.458,6.562 9.039,6.142 9.039,5.625 L9.039,3.828 C6.347,4.235 4.223,6.364 3.816,9.062 L5.611,9.062 C6.127,9.062 6.546,9.482 6.546,10.000 C6.546,10.518 6.127,10.937 5.611,10.937 L3.818,10.937 C4.224,13.637 6.348,15.766 9.039,16.174 L9.039,14.375 C9.039,13.857 9.458,13.437 9.974,13.437 C10.491,13.437 10.910,13.857 10.910,14.375 L10.910,16.174 C13.601,15.766 15.725,13.637 16.131,10.937 L14.338,10.937 C13.822,10.937 13.403,10.518 13.403,10.000 C13.403,9.482 13.822,9.062 14.338,9.062 ZM9.974,10.937 C9.458,10.937 9.039,10.518 9.039,10.000 C9.039,9.482 9.458,9.062 9.974,9.062 C10.491,9.062 10.910,9.482 10.910,10.000 C10.910,10.518 10.491,10.937 9.974,10.937 Z"/>
                                        </svg>
                                        Stats
                                    </h5>
                                </li>
                                <li className="numeric">
                                    <span className="mTitle">Wins</span>
                                    <span className="number">142</span>
                                </li>
                                <li className="numeric">
                                    <span className="mTitle">Losses</span>
                                    <span className="number">54</span>
                                </li>
                                <li className="numeric">
                                    <span className="mTitle">Ties</span>
                                    <span className="number">32</span>
                                </li>
                            </ul>

                            <ul className="right">
                                <li>
                                    <span className="title">Country</span>
                                    <span className="subtitle">
                                        <FlagIcon code={"mx"}/>Mexico
                                    </span>
                                </li>

                                <li>
                                    <span className="title">Year founded</span>
                                    <span className="subtitle"><FontAwesomeIcon icon={faClock}/> 2017</span>
                                </li>
                            </ul>

                        </div>
                        <div className="about">
                            <p>
                                SMALL TEAM HUGE PASSION, We are PixieSquad, and we create unique and super awesome themes for
                                gamers. An unlimited passion for design and giant love for a gaming, doing wonders beyond our
                                capabilities.
                            </p>

                            <p>
                                From playing Nintendo, action and shooter games we have always wanted to achieve something in the
                                big wild gaming world.
                            </p>

                            <p>
                                Now in the modern age, the gaming world is to be called ‘E-Sports’. Where our main focus lies. We
                                have dedicated ourselves to develop our careers in this direction. As it’s where we can show our
                                creativity in the fullest, where passion and crazy effects aren’t a problem, where rules are at the
                                minimum.
                            </p>

                        </div>
                        <div>
                            <ul className="achievements">

                                <li>
                                    <span className="title">ESL GAMING NEW YORK</span>
                                    <p>
                                        <span className="place first uk-margin-small-right">
                                            1st place
                                        </span>
                                        <span className="date">25th July</span>
                                    </p>
                                </li>

                                <li>
                                    <span className="title">ESL Tournament 2017</span>
                                    <p>
                                        <span className="place second uk-margin-small-right">
                                            2nd place
                                        </span>
                                        <span className="date">30 October</span>
                                    </p>
                                </li>
                                <li>
                                    <span className="title">MLG Columbus 2016</span>
                                    <p>
                                        <span className="place third uk-margin-small-right">
                                            3rd place
                                        </span>
                                        <span className="date">26 September</span>
                                    </p>
                                </li>
                                <li>
                                    <span className="title">TWC CS:GO 2017</span>
                                    <p>
                                        <span className="place third uk-margin-small-right">
                                            4th place
                                        </span>
                                        <span className="date">10 January</span>
                                    </p>
                                </li>
                                <li>
                                    <span className="title">MLG New York 2015</span>
                                    <p>
                                        <span className="place second">
                                            2nd place
                                        </span>
                                        <span className="date">8 August</span>
                                    </p>
                                </li>

                            </ul>
                        </div>

                        <div className="team-roster">
                            <SectionHeader title="Nuestros jugadores"/>

                            <div className="uk-grid uk-child-width-1-5@m roster uk-grid-small" uk-grid="true">
                                {this.state.players.map((player, index) => <PlayerCard {...player} key={index} />)}
                            </div>
                        </div>

                        <div className="team-roster">
                            <SectionHeader title="Noticias relacionadas"/>
                            <div className="uk-grid-collapse uk-child-width-1-2@m" uk-grid="true">
                                {this.state.news.slice(0,2).map((post, index) => <NewsCard key={index} {...post} large={true} />)}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
export default TeamPage;