import React from 'react';
import './popularNewsCard.css';

const PopularNewsCard = ({title, date, category}) => (
    <li>
        <div className="details">
            <span className="categories">
                <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/category/counter-strike/"
                   className="category">{category}</a>
            </span>
            <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/sk-invited-to-esl-one-new-york/"
               className="title">{title}</a>
            <span className="date">{date}</span>
        </div>

        <a href="http://themes.pixiesquad.com/pixiehuge/orange-elite/sk-invited-to-esl-one-new-york/" className="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="12px"
                 height="10px">
                <path fillRule="evenodd" fill="rgb(175, 175, 188)"
                      d="M6.245,0.240 C5.910,0.565 5.910,1.092 6.245,1.418 L9.065,4.160 L0.855,4.160 C0.382,4.160 -0.001,4.533 -0.001,4.993 C-0.001,5.453 0.382,5.826 0.855,5.826 L9.065,5.826 L6.245,8.569 C5.910,8.894 5.910,9.421 6.245,9.746 C6.579,10.071 7.121,10.071 7.456,9.746 L11.738,5.582 C11.893,5.431 11.989,5.223 11.989,4.993 C11.989,4.763 11.893,4.555 11.738,4.404 L7.456,0.240 C7.121,-0.085 6.579,-0.085 6.245,0.240 Z"/>
            </svg>
        </a>
    </li>
);

export default PopularNewsCard;