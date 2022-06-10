import React, {Component} from 'react';

import axios from "axios";
import {Select, Input} from 'antd';
import {nanoid} from "nanoid";

import Charts from "./Charts";
import CakeView from "./CakeView";
import 'antd/dist/antd.css'
import './index.css'

const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
    headers: {
        'X-RapidAPI-Key': '981fe59292msh92c84b0c0ac4bc2p12490cjsn898f180da505',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};





const {Option} = Select;



class StaView extends Component {

    state = {
        data:[],
        now: 'chn',
        date: [],
        newCase: []
    }

    componentDidMount() {

        //request country and simple
        {axios.request(options).then(
            res => this.setState({
                data: (res.data),
                now: '',
            })
        ).catch(
            err => console.log(err)
        )}
    }



    setCTRY = (c)=>{
        console.log(c)
        this.setState({now: c})
        console.log('sta----==>',this.state)
    }

    render() {

        return <>
            <div id="selectCountry">
                <Input.Group size="default">
                    <Select defaultValue="chn" children='China' className="select" onChange={c => this.setCTRY(c)}>
                        {this.state.data.map(obj => {
                            return <Option id={nanoid()} value={obj.ThreeLetterSymbol} compact>{obj.Country}</Option>
                        })}
                    </Select>
                </Input.Group>
                <Charts now={this.state.now} />
                <CakeView now={this.state.now}/>
                </div>

        </>
    }
}

export default StaView;



