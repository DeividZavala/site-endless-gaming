import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faTwitch, faYoutube} from '@fortawesome/free-brands-svg-icons';
import endlessLogo from '../../images/EG-LOGO-blue.png';
import './Nav.css';

class Navbar extends Component{
    render(){
        return(
            <header className="nav-main">
                <nav className="uk-navbar-container uk-margin-medium-left uk-margin-medium-right social-nav" uk-navbar="true">

                    <div className="uk-navbar-left">

                        <div>
                            <a className="uk-navbar-toggle" href="#"><span uk-icon="search"></span></a>
                            <div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
                                <form className="uk-search uk-search-navbar uk-width-1-1">
                                    <input className="uk-search-input" type="search" placeholder="Search..." autoFocus />
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="uk-navbar-right">

                        <ul className="uk-navbar-nav">
                            <li className=""><a href="https://www.facebook.com/EndlessGamingEG/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li className=""><a href="https://twitter.com/EndlessGamingEG"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li className=""><a href="https://www.instagram.com/endlessgamingmx/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li className=""><a href="#"><FontAwesomeIcon icon={faTwitch}/></a></li>
                            <li className=""><a href="https://www.youtube.com/channel/UCdi2kvFeMH_qyz7xmFTx7yA"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>

                    </div>

                </nav>
                <nav className="site-navbar uk-navbar-container padding-right" uk-navbar="true">

                    <div className="uk-navbar-left">
                        <Link className="uk-navbar-item uk-logo" to="/">
                            <img data-src={endlessLogo} alt="" uk-img="true" />
                        </Link>
                    </div>

                    <div className="uk-navbar-right uk-visible@s">
                        <ul className="uk-navbar-nav">
                            <li className=""><NavLink to="/">Inicio</NavLink></li>
                            <li><NavLink to="/news">Noticias</NavLink></li>
                            <li><NavLink to="">Matches</NavLink></li>
                            <li><NavLink to="/team">Equipos</NavLink></li>
                            <li><NavLink to="">Nosotros</NavLink></li>
                            <li><NavLink to="">Patrocinadores</NavLink></li>
                        </ul>
                    </div>

                    <div className="uk-navbar-right uk-hidden@s">
                        <ul className="uk-navbar-nav">
                            <li className="">
                                <a href="#" uk-toggle="target: #movile-menu">
                                    <span uk-icon="icon: menu;ratio:2"></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div id="movile-menu" uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">

                            <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                            <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                                <li className="uk-active"><a href="#">Noticias</a></li>
                                <li className=""><a href="#">Matches</a></li>
                                <li className=""><a href="#">Equipo</a></li>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Patrocinadores</a></li>
                                <li className="uk-nav-divider"></li>
                                <li><a href="#">Inicio</a></li>
                            </ul>

                        </div>
                    </div>

                </nav>
            </header>
        )
    }
}
export default Navbar;