import React, {Component} from 'react';
import MatchesDisplay from "../../components/MatchesPage/MatchesDisplay";

class MatchesPage extends Component{
    render() {
        return(
            <div className="uk-section matches-section">
                <div className="uk-container">
                    <MatchesDisplay/>
                </div>
            </div>
        )
    }
}

export default MatchesPage;