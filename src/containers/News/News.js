import React, {Component} from 'react';
import SectionHeader from "../../components/common/SectionHeader";
import NewsCard from "../../components/news/newsCard";
import LateralNews from '../../components/news/lateralNews';

class NewsPage extends Component{

    constructor(){
        super();
        this.state = {
            news: [
                {
                    title: "RENEGADES DEFEAT SIGNATURE; TO MINOR PLAYOFFS",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post7.jpg",
                    category: "Call of duty"
                },
                {
                    title: "SCREAM: “NOW WE KNOW WE’RE CAPABLE OF",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post8.jpg",
                    category: "Counter Strike"
                },
                {
                    title: "DH VALENCIA AND ATLANTA QUALIFIERS ANNOUNCED",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post9.jpg",
                    category: "League of legends"
                },
                {
                    title: "WINNERS AND LOSERS OF ESL PRO LEAGUE S5 FINALS",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post6.jpg",
                    category: "Call of duty"
                },
                {
                    title: "SHAHZAM RETURNS TO MISFITS’ ACTIVE LINEUP",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post5.jpg",
                    category: "Call of duty"
                },
                {
                    title: "JW: I’M SURE SWEDEN WILL BE BACK ON TOP AGAIN",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post4.jpg",
                    category: "Call of duty"
                }
                ,
                {
                    title: "BIG BEAT KINGUIN IN BUCHAREST",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post3.jpg",
                    category: "Dota2"
                },
                {
                    title: "FOX: “FIRST LAN IS HARD, BUT OUR GOAL IS CLEAR”",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post2.jpg",
                    category: "League of legends"
                },
                {
                    title: "GATEKEEPERS SIGN TEAM ON A PERMANENT BASIS",
                    date: "June 16, 2017",
                    img: "https://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/post1.jpg",
                    category: "Counter strike"
                }
            ]
        }
    }

    render() {
        return (
            <div className="uk-section news-section">
                <div className="uk-container">
                    <div className="uk-grid-small" uk-grid="true">
                        <div className="uk-width-expand@m">
                            <SectionHeader title="Últimas noticias"/>
                            <div className="uk-child-width-1-1@m uk-width-1-1@m">
                                {this.state.news.slice(0,1).map((post, index) => <NewsCard key={index} {...post} large={true} />)}
                            </div>
                            <div className="uk-child-width-1-2@m uk-width-1-1@m uk-grid-collapse" uk-grid="true">
                                {this.state.news.slice(1,).map((post, index) => <NewsCard key={index} {...post} />)}
                            </div>
                        </div>
                        <div className="uk-width-1-3@m">
                            <LateralNews news={this.state.news.slice(0,5)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsPage;