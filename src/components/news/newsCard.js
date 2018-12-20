import React from 'react';
import './newsCard.css';

const NewsCard = ({large, title, date, img, category}) => (
    <div>
        <article
            className={`news-card post ${large ? 'large' : '' }`}
            style={{backgroundImage: `url(${img})`}}>
            <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/category/overwatch/" className="category">
                {category}
            </a>
            <div className="details">
                <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/renegades-defeat-signature-to-minor-playoffs/">
                    {title}
                </a>
                <span className="date">
                    {date}
                </span>
            </div>
        </article>
    </div>
);

export default NewsCard;