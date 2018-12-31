import React from 'react';
import './smallNewsCard.css';

const SmallNewsCard = ({img, title, category, date}) => (
    <li>
        <div className="thumbnail"
             style={{backgroundImage: `url(${img})`}}></div>
        <div className="details">
                    <span className="categories">
                        <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/category/overwatch/"
                           className="category">{category}</a>
                    </span>
            <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/renegades-defeat-signature-to-minor-playoffs/"
               className="title">
                {title} </a>
            <span className="date">{date}</span>
        </div>
    </li>
);

export default SmallNewsCard;