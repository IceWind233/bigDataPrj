import React, {Component} from 'react'
import axios from "axios";

import {nanoid} from "nanoid";

import NewsItems from './NewsItems'

const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
    headers: {
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'X-RapidAPI-Key': '981fe59292msh92c84b0c0ac4bc2p12490cjsn898f180da505'
    }
};


export default class News extends Component{

    state ={
        data:[]
    }
    componentDidMount() {
        const _this = this
        axios.request(options).
        then((res)=>{
            _this.setState({data:res.data.news})
        })
    }

    render(){
        return <div id="news">
            {this.state.data.map(obj=>{
                return <div>
                    <NewsItems id={nanoid(10)} link={obj.link} title={obj.title} pubDate={obj.pubDate} newsId={obj.news_id}/>
                </div>

            })}
        </div>
    }
}

