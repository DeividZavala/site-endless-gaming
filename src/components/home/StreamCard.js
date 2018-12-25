import React from 'react';
import './StreamCard.css';

const StreamCard = ({large}) => (
    <div className={`streamBox ${large ? 'large' : '' }`}
         style={{backgroundImage: `url('https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/thumbnail.jpg')`}}>

        {!large ?
            <div className="details on-hover">
                <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/stream/cohhcarnage">
                    Amazing Call of Duty 4 in action
                </a>
                <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/stream/cohhcarnage" className="cta-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9px"
                         height="8px">
                        <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                              d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"></path>
                    </svg>
                </a>
            </div>
        : null}

        {large ?
            <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/stream/cohhcarnage" className="playBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="10px"
                     height="12px">
                    <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M10.000,6.000 C10.000,6.412 9.789,6.773 9.473,6.968 L9.474,6.968 L1.629,11.835 C1.626,11.837 1.623,11.839 1.620,11.841 L1.616,11.843 L1.616,11.843 C1.457,11.942 1.270,12.000 1.071,12.000 C0.480,12.000 -0.000,11.496 -0.000,10.875 L-0.000,10.875 L-0.000,1.124 L-0.000,1.124 C-0.000,0.503 0.480,-0.000 1.071,-0.000 C1.270,-0.000 1.457,0.057 1.616,0.156 L1.616,0.156 L1.620,0.159 C1.623,0.160 1.626,0.162 1.629,0.164 L9.474,5.031 L9.473,5.031 C9.789,5.227 10.000,5.587 10.000,6.000 Z"></path>
                </svg>
            </a>
        : null}
        {large ?
            <div className="details">
                <span className="stream twitch">twitch</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/stream/cohhcarnage">EA hit with Battlefield 4
                    lawsuit but does it have merit?</a>
                <h6>CohhCarnage</h6>
            </div>
            : null}
    </div>
);
export default StreamCard;