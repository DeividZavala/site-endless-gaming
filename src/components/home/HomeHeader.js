import React from 'react';

const HomeHeader = () => (
    <div className="main-banner">
        <div className="banner-image uk-flex uk-flex-middle uk-background-cover uk-light"
             data-src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/main-hero-2.jpg" uk-img="true">
            <div className="main-banner-info uk-container">
                <h4 className="color-primary">eSports Fans This Is For You</h4>
                <h3 className="colo-white">Built for gamers, eSports fans, game fans & true gaming lovers</h3>
                <h5>Built for gamers, eSports fans, game fans & true gaming lovers</h5>
                <button className="btn btn-primary">
                    Conoce nuestros equipo
                </button>
            </div>
        </div>
        <div className="sponsor-slider">
            <div className="uk-container">
                <div className="uk-position-relative uk-visible-toggle uk-light" uk-slider="sets: true">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
                        <li>
                            <img src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/8.png" alt="" />
                        </li>
                        <li>
                            <img src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/4.png" alt="" />
                        </li>
                        <li>
                            <img src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/5.png" alt="" />
                        </li>
                        <li>
                            <img src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/6.png" alt="" />
                        </li>
                        <li>
                            <img src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/7.png" alt="" />
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                       uk-slidenav-previous="true" uk-slider-item="previous">
                        <span className="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left; ratio: 1.5"></span>
                    </a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#"
                       uk-slidenav-next="true" uk-slider-item="next">
                        <span uk-icon="icon: chevron-right;ratio: 1.5"></span>
                    </a>

                </div>
            </div>
        </div>
    </div>
);

export default HomeHeader;