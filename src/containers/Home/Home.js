import React, {Component} from 'react';
import './Home.css'
import NewsCard from "../../components/news/newsCard";

class Home extends Component{

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
                },
                {
                    title: "DH VALENCIA AND ATLANTA QUALIFIERS ANNOUNCED",
                    date: "June 16, 2017",
                    img: "http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post9.jpg",
                    category: "League of legends"
                },
                {
                    title: "WINNERS AND LOSERS OF ESL PRO LEAGUE S5 FINALS",
                    date: "June 16, 2017",
                    img: "http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post6.jpg",
                    category: "Call of duty"
                },
                {
                    title: "SHAHZAM RETURNS TO MISFITS’ ACTIVE LINEUP",
                    date: "June 16, 2017",
                    img: "http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post5.jpg",
                    category: "Call of duty"
                }
            ]
        }
    }

    render(){
        return(
            <div>
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
                <div className="uk-section-large">
                    <div className="uk-container">

                        <div className="section-header">
                            <article className="topbar">
                                <h3>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="7px" height="8px">
                                        <path fillRule="evenodd" fill="rgb(57, 191, 253)"
                                              d="M-0.000,0.435 C-0.000,0.805 -0.000,7.292 -0.000,7.546 C-0.000,7.877 0.338,8.123 0.672,7.930 C0.940,7.775 6.293,4.649 6.750,4.381 C7.050,4.205 7.045,3.786 6.750,3.611 C6.421,3.415 1.048,0.272 0.658,0.054 C0.373,-0.106 -0.000,0.071 -0.000,0.435 Z"/>
                                    </svg>
                                    Últimas noticias
                                </h3>
                            </article>
                        </div>

                        <div className="uk-grid-collapse uk-child-width-1-2@m" uk-grid="true">
                            {this.state.news.slice(0,2).map(post => <NewsCard {...post} large={true} />)}
                        </div>
                        <div className="uk-grid-collapse uk-child-width-1-3@m" uk-grid="true">
                            {this.state.news.slice(2).map(post => <NewsCard {...post} />)}
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}
export default Home;