import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faTwitch, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";
import './PlayerCard.css';

const PlayerCard = ({name, lastname, profilePicture, nickname, role, game}) => (
    <div>
        <div className="player-card" style={{backgroundImage: `url(${profilePicture})`}}>
            <div className="details">
                <h4>{nickname}</h4>
                <span className="role">
                    {role}
                </span>
            </div>
            <div className="overlay">
                <ul>
                    <li className="firstname">
                        {name}
                    </li>
                    <li className="lastname">
                        {lastname}
                    </li>
                    <li className="nickname">
                        {nickname}
                    </li>
                    <li className="role">
                        {role}
                    </li>
                </ul>


                <a href="http://facebook.com/pixiesquad" target="_blank" rel="noopener noreferrer">
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
                <a href="http://facebook.com/pixiesquad" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

                <Link to={`/team/${game}/player/${nickname}`} className="player-cta">
                    SEE PROFILE <svg xmlns="http://www.w3.org/2000/svg"
                                     width="9px" height="8px">
                    <path fillRule="evenodd" fill="rgb(0, 0, 0)"
                          d="M4.700,0.183 C4.449,0.444 4.449,0.867 4.700,1.128 L6.817,3.327 L0.654,3.327 C0.298,3.327 0.011,3.626 0.011,3.995 C0.011,4.363 0.298,4.662 0.654,4.662 L6.817,4.662 L4.700,6.862 C4.449,7.123 4.449,7.545 4.700,7.806 C4.951,8.067 5.358,8.067 5.609,7.806 L8.824,4.467 C8.940,4.346 9.013,4.179 9.013,3.995 C9.013,3.810 8.940,3.643 8.824,3.522 L5.609,0.183 C5.358,-0.077 4.951,-0.077 4.700,0.183 Z"/>
                </svg>
                </Link>
            </div>
        </div>
    </div>
);

export default PlayerCard;