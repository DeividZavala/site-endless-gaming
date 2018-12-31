import React from 'react';
import './MapCard.css';

const MapCard = () => (
    <div className="">
        <div className="map-card" style={{backgroundImage: `url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/De-Inferno.jpg')`}}>

            <article className="details">

                <div className="left">
                    <h5>De Inferno</h5>
                    <span className="won">Rhyno Domynos won the round</span>
                </div>

                <div className="right">
                    <img src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                         alt="Team&#039;s logo" />
                </div>

            </article>
        </div>
    </div>
);

export default MapCard;