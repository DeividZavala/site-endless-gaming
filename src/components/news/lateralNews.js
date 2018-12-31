import React from 'react';
import SmallNewsCard from "./smallNewsCard";
import './lateralNews.css';
import SectionHeader from "../common/SectionHeader";
import PopularNewsCard from "./popularNewsCard";

const LateralNews = ({news}) => (
    <div className="lateral-news">
        <SectionHeader title="Últimas noticias"/>
        <div>
            <ul className="widget">
                {news.map((post, index) => <SmallNewsCard key={index} {...post} />)}
            </ul>
        </div>
        <SectionHeader title="Noticias más populares"/>
        <div className="most-popular">
            <ul>
                {news.map((post, index) => <PopularNewsCard key={index} {...post} />)}
            </ul>
        </div>
    </div>
);

export default  LateralNews;