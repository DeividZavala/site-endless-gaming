import React from 'react';
import SectionHeader from "../common/SectionHeader";
import Match from "../home/Match";

const MatchesDisplay = () => (
    <div>
        <SectionHeader title="Nuestras partidas"/>

        <ul className="uk-tab" uk-switcher="animation: uk-animation-fade">
            <li><a href="#">Próximas partidas</a></li>
            <li><a href="#">Últimos resultados</a></li>
        </ul>

        <ul className="uk-switcher uk-margin">
            <li>
                <Match />
            </li>
            <li>
                <Match live={true} score={true}/>
            </li>
        </ul>
    </div>
);

export default MatchesDisplay;