import React from 'react';
import './Match.css'

const Match = ({live, score}) => (
    <div className="matchBox">
        <div className="teams">
            <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/team/midnight-turtles">
                <img src="https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                     alt="Team&#039;s logo" />
                    <span>Midnight Turtles</span>
            </a>
            {score ? <span className="score">0 - 3</span> : <span className="vs">VS</span>}
            <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/team/rhyno-domynos">
                <img src="https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                     alt="Team&#039;s logo" />
                    <span>Rhyno Domynos</span>
            </a>
        </div>

        <div className="rightBox">
            <div className="match-info">
                <span className="league">SL i-League StarSeries S3</span>
                <div className="status">
                    <span>Online</span> Vainglory
                </div>

                <span className="date">16 June at 02:05 AM</span>
            </div>

            {live ? <div className="stream">
                <a href="https://www.twitch.tv/cohhcarnage" target="_blank" rel="noopener noreferrer">Watch this match live</a>
                <span className="twitch">twitch</span>
            </div> : null}

        </div>
        <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/match/2-midnight-turtles-rhyno-domynos"
           className="cta-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="9px" height="8px">
                <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                      d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"/>
            </svg>
        </a>
    </div>
);
export default Match;
