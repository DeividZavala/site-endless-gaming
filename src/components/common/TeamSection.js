import React from 'react';
import SectionHeader from "./SectionHeader";
import TeamCard from "../home/TeamCard";

const TeamSection = () => (
    <div className="uk-container uk-margin-medium-top">
        <SectionHeader title="Nuestros equipos"/>

        <div className="uk-grid uk-child-width-1-2@m uk-grid-small" uk-grid="true">

            <TeamCard game="league-of-legends" img="https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Team1.jpg" />
            <TeamCard game="call-of-duty" img="https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Team2.jpg" />
            <TeamCard game="overwatch" img="https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Team3.jpg" />
            <TeamCard game="counter-strike" img="https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Team4.jpg"/>

        </div>

    </div>
);

export default TeamSection;