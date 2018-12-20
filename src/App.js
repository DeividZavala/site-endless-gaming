import React, { Component } from 'react';
import './App.css';
import Router from "./router";
import Navbar from "./components/common/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitch, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Router />

          <footer className="homepage">
              <div className="uk-container top">

                  <article className="box">
                      <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="7px"
                               height="8px">
                              <path fillRule="evenodd" fill="rgb(57, 191, 253)"
                                    d="M-0.000,0.435 C-0.000,0.805 -0.000,7.292 -0.000,7.546 C-0.000,7.877 0.338,8.123 0.672,7.930 C0.940,7.775 6.293,4.649 6.750,4.381 C7.050,4.205 7.045,3.786 6.750,3.611 C6.421,3.415 1.048,0.272 0.658,0.054 C0.373,-0.106 -0.000,0.071 -0.000,0.435 Z"/>
                          </svg>
                          Latest Posts
                      </h4>
                      <ul>
                          <li>
                              <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/category/overwatch/"
                                 className="category">
                                  Overwatch </a>
                              <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/renegades-defeat-signature-to-minor-playoffs/">RENEGADES
                                  DEFEAT SIGNATURE; TO MINOR PLAYOFFS</a>
                              <span className="date">June 16, 2017</span>
                          </li>
                          <li>
                              <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/category/counter-strike/"
                                 className="category">
                                  Counter Strike </a>
                              <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/scream-now-we-know-were-capable-of-winning/">SCREAM: &#8220;NOW
                                  WE KNOW WE&#8217;RE CAPABLE OF WINNING&#8221;</a>
                              <span className="date">June 16, 2017</span>
                          </li>
                      </ul>
                  </article>

                  <article className="box">
                      <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="7px"
                               height="8px">
                              <path fillRule="evenodd" fill="rgb(57, 191, 253)"
                                    d="M-0.000,0.435 C-0.000,0.805 -0.000,7.292 -0.000,7.546 C-0.000,7.877 0.338,8.123 0.672,7.930 C0.940,7.775 6.293,4.649 6.750,4.381 C7.050,4.205 7.045,3.786 6.750,3.611 C6.421,3.415 1.048,0.272 0.658,0.054 C0.373,-0.106 -0.000,0.071 -0.000,0.435 Z"/>
                          </svg>
                          Our Departments
                      </h4>
                      <ul>
                          <li>
                              <a href="mailto:office@pixiesquad.com">
                                <span className="info">
                                    <i className="icon" style={{backgroundImage: `url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/icon1.png')`}}></i>
                                    Management
                                </span>
                                <span className="email">
                                    office@pixiesquad.com
                                </span>
                              </a>
                          </li>
                          <li>
                              <a href="mainto:help@pixiesquad.com">
                                <span className="info">
                                    <i className="icon" style={{backgroundImage: "url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/icon2.png')"}}></i>
                                    Support
                                </span>
                                  <span className="email">
                                      help@pixiesquad.com
                                  </span>
                            </a>
                          </li>
                          <li>
                              <a href="mailto:news@pixiesquad.com">
                                <span className="info">
                                    <i className="icon" style={{backgroundImage: "url('http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/icon3.png')"}}></i>
                                    Press
                                </span>
                                  <span className="email">
                                      news@pixiesquad.com
                                  </span>
                              </a>
                          </li>
                      </ul>
                  </article>

                  <article className="box useful">
                      <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="7px"
                               height="8px">
                              <path fillRule="evenodd" fill="rgb(57, 191, 253)"
                                    d="M-0.000,0.435 C-0.000,0.805 -0.000,7.292 -0.000,7.546 C-0.000,7.877 0.338,8.123 0.672,7.930 C0.940,7.775 6.293,4.649 6.750,4.381 C7.050,4.205 7.045,3.786 6.750,3.611 C6.421,3.415 1.048,0.272 0.658,0.054 C0.373,-0.106 -0.000,0.071 -0.000,0.435 Z"/>
                          </svg>
                          Useful Links
                      </h4>
                      <ul id="footer_menu" className="useful-links">
                          <li id="menu-item-100"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100">
                              <span>+</span><a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/news/">News</a>
                          </li>
                          <li id="menu-item-101"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                              <span>+</span><a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/about-us/">About
                              us</a></li>
                          <li id="menu-item-102"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                              <span>+</span><a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/team/">Team</a>
                          </li>
                          <li id="menu-item-103"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                              <span>+</span><a href="http://pixiesquad.com">PixieSquad</a></li>
                          <li id="menu-item-104"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-104">
                              <span>+</span><a href="http://support.pixiesquad.com">Support</a></li>
                      </ul>
                  </article>

                  <article className="box aboutUs">
                      <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="7px"
                               height="8px">
                              <path fillRule="evenodd" fill="rgb(57, 191, 253)"
                                    d="M-0.000,0.435 C-0.000,0.805 -0.000,7.292 -0.000,7.546 C-0.000,7.877 0.338,8.123 0.672,7.930 C0.940,7.775 6.293,4.649 6.750,4.381 C7.050,4.205 7.045,3.786 6.750,3.611 C6.421,3.415 1.048,0.272 0.658,0.054 C0.373,-0.106 -0.000,0.071 -0.000,0.435 Z"/>
                          </svg>
                          About Us
                      </h4>

                      <p>
                          Now in the modern age, the gaming world is to be called ‘E-Sports’. Where our main focus lies.
                          We have dedicated ourselves to develop our careers in this direction. As it’s where we can
                          show our creativity in </p>

                      <a href="http://pixiesquad.com" rel="noopener noreferrer">More About Us</a>
                  </article>

              </div>

              <div className="bottom">
                  <div className="uk-container uk-navbar-container" uk-navbar="true">

                      <div className="uk-navbar-left uk-width-1-1@s">

                          <ul className="uk-navbar-nav">
                              <li className=""><a href="https://www.facebook.com/EndlessGamingEG/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                              <li className=""><a href="https://twitter.com/EndlessGamingEG"><FontAwesomeIcon icon={faTwitter} /></a></li>
                              <li className=""><a href="https://www.instagram.com/endlessgamingmx/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                              <li className=""><a href="#"><FontAwesomeIcon icon={faTwitch}/></a></li>
                              <li className=""><a href="https://www.youtube.com/channel/UCdi2kvFeMH_qyz7xmFTx7yA"><FontAwesomeIcon icon={faYoutube} /></a></li>
                          </ul>
                      </div>


                      <div className="uk-navbar-right uk-width-1-1@s">
                          <h5>Copyright Endless Gaming, crafted with love by Endless Gaming 2018</h5>
                      </div>

                  </div>
              </div>
          </footer>

      </div>
    );
  }
}

export default App;
