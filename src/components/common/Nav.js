import React, {Component} from 'react';
import './Nav.css';

class Navbar extends Component{
    render(){
        return(
            <header className="nav-main">
                <nav className="uk-navbar-container" uk-navbar="true">

                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav">
                            <li className=""><a href="#">Active</a></li>
                        </ul>

                    </div>

                    <div className="uk-navbar-right">

                        <ul className="uk-navbar-nav">
                            <li className=""><a href="#">Active</a></li>
                        </ul>

                    </div>

                </nav>
                <div></div>
            </header>
        )
    }
}
export default Navbar;