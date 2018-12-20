import React from 'react';
import './TeamCard.css';

const TeamCard = ({img}) => (
    <div className="team-card">
        <div className="box"
             style={{backgroundImage: `url(${img})`}}>
            <div className="overlay">
                <h4>View team page</h4>
                <h5>Click here to see</h5>
                <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="14px" height="12px">
                    <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M7.293,0.274 C6.902,0.665 6.902,1.299 7.293,1.690 L10.586,4.989 L1.000,4.989 C0.448,4.989 -0.000,5.438 -0.000,5.991 C-0.000,6.545 0.448,6.993 1.000,6.993 L10.586,6.993 L7.293,10.292 C6.902,10.684 6.902,11.318 7.293,11.709 C7.683,12.100 8.316,12.100 8.707,11.709 L13.707,6.700 C13.888,6.519 14.000,6.268 14.000,5.991 C14.000,5.714 13.888,5.464 13.707,5.283 L8.707,0.274 C8.316,-0.118 7.683,-0.118 7.293,0.274 Z"/>
                </svg>
            </span>
            </div>
        </div>
    </div>
);

export default TeamCard;