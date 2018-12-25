import React, {Component} from 'react';
import FlagIcon from "../../components/common/FlagIcon";
import './PlayerPage.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";
import SectionHeader from "../../components/common/SectionHeader";

class PlayerPage extends Component{
    render(){
        return(
            <div className="uk-margin-large-bottom">
                <div className="cover-bg"
                     style={{backgroundImage: `url('https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/cover-player-1.jpg')`}}></div>
                <section id="player-profile">

                    <div className="uk-container">
                        <article className="player-info uk-grid-collapse uk-grid-match " uk-grid="true">
                            <div className="uk-width-1-3@m uk-width-1-1@s">
                                <div className="avatar" style={{backgroundImage: `url('https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Player-Profile-1.jpg')`}}></div>
                            </div>
                            <div className="uk-width-2-3@m">
                                <div className="right-panel">
                                    <ul className="profile-details">
                                        <li>
                                            <figure>
                                                <img src="https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png" alt="Milex" />
                                            </figure>
                                            <div className="name">
                                                <span className="nickname">Milex</span>
                                                <h4>Andres Miles</h4>
                                            </div>
                                        </li>
                                        <li className="social">
                                            <a href="http://facebook.com/pixiesquad" className="stream twitch">Twitch.tv</a>
                                            <div className="links">
                                                <a href="http://facebook.com/pixiesquad" className="first" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faFacebookF}/>
                                                </a>
                                                <a href="http://facebook.com/pixiesquad" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faTwitter}/>
                                                </a>
                                                <a href="http://facebook.com/pixiesquad" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                                <a href="http://facebook.com/pixiesquad" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faTwitch} />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="info-section">
                                        <li>
                                            <span className="title">Currently team</span>
                                            <a href="https://themes.pixiesquad.com/pixiehuge/orange-elite/team/midnight-turtles">Midnight
                                                Turtles
                                                <svg className="uk-margin-small-left" xmlns="http://www.w3.org/2000/svg" width="9px"
                                                     height="8px">
                                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                                          d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.325 L0.643,3.325 C0.287,3.325 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.287,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"/>
                                                </svg></a>
                                        </li>
                                        <li>
                                            <span className="title">Player age</span>
                                            <span className="desc">21</span>
                                        </li>
                                        <li>
                                            <span className="title">Country</span>
                                            <span className="desc"><FlagIcon className="uk-display-inline-block uk-margin-small-right" code={"mx"}/>México</span>
                                        </li>

                                        <li>
                                            <span className="title">Ingame Role</span>
                                            <span className="desc"><i className="icon" style={{backgroundImage: `url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/role.png')`}}></i> Jumper</span>
                                        </li>
                                    </ul>

                                    <div className="about">
                                        <span className="title">Player</span>
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="14px">
                                                <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M12.071,-0.000 L0.928,-0.000 C0.415,-0.000 -0.000,0.391 -0.000,0.875 L-0.000,7.000 C-0.000,10.867 5.822,13.778 6.070,13.900 C6.205,13.966 6.352,13.999 6.500,13.999 C6.648,13.999 6.795,13.966 6.929,13.900 C7.178,13.778 13.000,10.867 13.000,7.000 L13.000,0.875 C13.000,0.391 12.584,-0.000 12.071,-0.000 ZM11.143,1.750 L11.143,3.500 L1.857,3.500 L1.857,1.750 L11.143,1.750 ZM6.499,12.124 C4.890,11.238 1.857,9.129 1.857,7.000 L1.857,5.250 L11.143,5.250 L11.143,7.000 C11.143,9.122 8.108,11.235 6.499,12.124 Z"/>
                                            </svg>
                                            Quick Bio
                                        </h4>

                                        <p>
                                            <span >Now in the modern age, the gaming world is to be called ‘E-Sports’. Where our main focus lies. We have dedicated ourselves to develop our careers in this direction. </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </article>

                        <div>
                            <SectionHeader title="Más detalles"/>

                            <div className="content">
                                <div className="stats">
                                    <ul>
                                        <li>
                                            <h4>250</h4>
                                            <div className="info">
                                                <span className="title">Total kills</span>
                                                <span className="desc">achieved so far</span>
                                            </div>
                                        </li>

                                        <li>
                                            <h4>123</h4>
                                            <div className="info">
                                                <span className="title">Headshots</span>
                                                <span className="desc">made in games</span>
                                            </div>
                                        </li>

                                        <li>
                                            <h4>124</h4>
                                            <div className="info">
                                                <span className="title">Total deaths</span>
                                                <span className="desc">by the player</span>
                                            </div>
                                        </li>

                                        <li>
                                            <h4>7.51</h4>
                                            <div className="info last">
                                                <span className="title">Player Rating</span>
                                                <span className="desc">skill level</span>
                                            </div>
                                        </li>

                                        <li className="steam">
                                            <a href="http://facebook.com/pixiesquad" className="btn btn-primary"
                                               target="_blank" rel="noopener noreferrer">View steam</a>
                                        </li>
                                    </ul>

                                </div>

                                <div className="equip">

                                    <ul className="desc">
                                        <li>
                                            <div className="details">
                                                <span className="name">Mouse</span>
                                                <span className="model">The Deathadder Elite</span>
                                            </div>

                                            <a href="http://facebook.com/pixiesquad">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9px"
                                                     height="8px">
                                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                                          d="M4.688,0.187 C4.437,0.448 4.437,0.871 4.688,1.131 L6.805,3.331 L0.643,3.331 C0.288,3.331 -0.000,3.630 -0.000,3.999 C-0.000,4.368 0.288,4.667 0.643,4.667 L6.805,4.667 L4.688,6.867 C4.437,7.128 4.437,7.550 4.688,7.811 C4.939,8.072 5.346,8.072 5.597,7.811 L8.811,4.471 C8.928,4.350 9.000,4.184 9.000,3.999 C9.000,3.814 8.928,3.648 8.811,3.527 L5.597,0.187 C5.346,-0.074 4.939,-0.074 4.688,0.187 Z"/>
                                                </svg>
                                            </a>
                                        </li>

                                        <li>
                                            <div className="details">
                                                <span className="name">Headset</span>
                                                <span className="model">Razer Kraken Chroma v7.1</span>
                                            </div>

                                            <a href="http://Razer%20Kraken%20Chroma%20v7.1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9px"
                                                     height="8px">
                                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                                          d="M4.688,0.187 C4.437,0.448 4.437,0.871 4.688,1.131 L6.805,3.331 L0.643,3.331 C0.288,3.331 -0.000,3.630 -0.000,3.999 C-0.000,4.368 0.288,4.667 0.643,4.667 L6.805,4.667 L4.688,6.867 C4.437,7.128 4.437,7.550 4.688,7.811 C4.939,8.072 5.346,8.072 5.597,7.811 L8.811,4.471 C8.928,4.350 9.000,4.184 9.000,3.999 C9.000,3.814 8.928,3.648 8.811,3.527 L5.597,0.187 C5.346,-0.074 4.939,-0.074 4.688,0.187 Z"/>
                                                </svg>
                                            </a>
                                        </li>

                                        <li>
                                            <div className="details">
                                                <span className="name">CPU</span>
                                                <span className="model">Intel i7 3.7GHz</span>
                                            </div>

                                            <a href="http://Intel%20i7%203.7GHz">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9px"
                                                     height="8px">
                                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                                          d="M4.688,0.187 C4.437,0.448 4.437,0.871 4.688,1.131 L6.805,3.331 L0.643,3.331 C0.288,3.331 -0.000,3.630 -0.000,3.999 C-0.000,4.368 0.288,4.667 0.643,4.667 L6.805,4.667 L4.688,6.867 C4.437,7.128 4.437,7.550 4.688,7.811 C4.939,8.072 5.346,8.072 5.597,7.811 L8.811,4.471 C8.928,4.350 9.000,4.184 9.000,3.999 C9.000,3.814 8.928,3.648 8.811,3.527 L5.597,0.187 C5.346,-0.074 4.939,-0.074 4.688,0.187 Z"/>
                                                </svg>
                                            </a>
                                        </li>

                                        <li>
                                            <div className="details">
                                                <span className="name">Mouse Pad</span>
                                                <span className="model">Roccat Taito Control</span>
                                            </div>

                                            <a href="http://facebook.com/pixiesquad">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9px"
                                                     height="8px">
                                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                                          d="M4.688,0.187 C4.437,0.448 4.437,0.871 4.688,1.131 L6.805,3.331 L0.643,3.331 C0.288,3.331 -0.000,3.630 -0.000,3.999 C-0.000,4.368 0.288,4.667 0.643,4.667 L6.805,4.667 L4.688,6.867 C4.437,7.128 4.437,7.550 4.688,7.811 C4.939,8.072 5.346,8.072 5.597,7.811 L8.811,4.471 C8.928,4.350 9.000,4.184 9.000,3.999 C9.000,3.814 8.928,3.648 8.811,3.527 L5.597,0.187 C5.346,-0.074 4.939,-0.074 4.688,0.187 Z"/>
                                                </svg>
                                            </a>
                                        </li>

                                        <li>
                                            <div className="details">
                                                <span className="name">Keyboard</span>
                                                <span className="model">Razer Ornata Chroma</span>
                                            </div>

                                            <a href="http://Razer%20Ornata%20Chroma">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9px"
                                                     height="8px">
                                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                                          d="M4.688,0.187 C4.437,0.448 4.437,0.871 4.688,1.131 L6.805,3.331 L0.643,3.331 C0.288,3.331 -0.000,3.630 -0.000,3.999 C-0.000,4.368 0.288,4.667 0.643,4.667 L6.805,4.667 L4.688,6.867 C4.437,7.128 4.437,7.550 4.688,7.811 C4.939,8.072 5.346,8.072 5.597,7.811 L8.811,4.471 C8.928,4.350 9.000,4.184 9.000,3.999 C9.000,3.814 8.928,3.648 8.811,3.527 L5.597,0.187 C5.346,-0.074 4.939,-0.074 4.688,0.187 Z"/>
                                                </svg>
                                            </a>
                                        </li>

                                        <li>
                                            <div className="details">
                                                <span className="name">Graphics Card</span>
                                                <span className="model">nVidia GTX 1080 4GB</span>
                                            </div>

                                            <a href="http://nVidia%20GTX%201080%204GB">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9px"
                                                     height="8px">
                                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                                          d="M4.688,0.187 C4.437,0.448 4.437,0.871 4.688,1.131 L6.805,3.331 L0.643,3.331 C0.288,3.331 -0.000,3.630 -0.000,3.999 C-0.000,4.368 0.288,4.667 0.643,4.667 L6.805,4.667 L4.688,6.867 C4.437,7.128 4.437,7.550 4.688,7.811 C4.939,8.072 5.346,8.072 5.597,7.811 L8.811,4.471 C8.928,4.350 9.000,4.184 9.000,3.999 C9.000,3.814 8.928,3.648 8.811,3.527 L5.597,0.187 C5.346,-0.074 4.939,-0.074 4.688,0.187 Z"/>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>

                                    <p>
                                        Now in the modern age, the gaming world is to be called u2018E-Sportsu2019.
                                        Where our main focus lies </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        )
    }
}

export default PlayerPage;