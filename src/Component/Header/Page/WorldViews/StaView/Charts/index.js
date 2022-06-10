import React, {useEffect} from 'react';

import axios from "axios";
import * as echarts from "echarts";

let style={
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: 'COVID History Of Specific Country'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        name: 'Persons',
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10
        },
        {
            start: 0,
            end: 10
        }
    ],
    series: [
        {
            name: 'Cases',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: '#722ed1'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#d3adf7'
                    },
                    {
                        offset: 1,
                        color: '#722ed1'
                    }
                ])
            },
            data: []
        },
        {
            name: 'Death',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: '#d4380d'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#ff9c6e'
                    },
                    {
                        offset: 1,
                        color: '#d4380d'
                    }
                ])
            },
            data: []
        },
    ]
};



export default function Charts(props){
    let optionData= {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/${props.now}`,
        headers: {
            'X-RapidAPI-Key': '981fe59292msh92c84b0c0ac4bc2p12490cjsn898f180da505',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    }

    useEffect(()=>{
        let myChart = echarts.init(document.getElementById('view2'))
        axios.request(optionData).then(
            res=> {
                style.xAxis.data=res.data.map(obj=>obj.date)
                style.series[0].data=res.data.map(obj=>obj.new_cases)
                style.series[1].data=res.data.map(obj=>obj.new_deaths)
                myChart.setOption(style)
            }
        ).catch(
            err => console.log(err)
        )
        return myChart.clear()
    }, [props.now])

    return  <div id="view2">
    </div>
}