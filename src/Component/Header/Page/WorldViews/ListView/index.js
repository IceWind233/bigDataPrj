import React, {useEffect} from 'react';

import * as echarts from 'echarts'
import axios from "axios";

import "./index.css"


const options = {
    method: 'GET',
    url:'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
    headers: {
        'X-RapidAPI-Host':'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'X-RapidAPI-Key': '981fe59292msh92c84b0c0ac4bc2p12490cjsn898f180da505'
    }
};

function ListView(props) {
    const nbsp = '  '
    let style = {
        title:{
            text:"List Of Top 5"
        },
        tooltip:{
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend:{
            data: ['Infect', 'Death', 'Cure']
        },
        grid:{
            left: 5
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'value',
            name: 'Nums',
            axisLabel: {
                formatter: '{value}'
            }
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: [],
            axisLabel: {

                margin: 10,
            },
            max: 4
        },
        series: [
            {
                name: 'Cure',
                type: 'bar',
                data: [],
                label: {
                    show: true
                },
                markPoint: {
                    symbolSize: 1,
                    symbolOffset: [0, '50%'],
                    label: {
                        formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                        backgroundColor: 'rgb(240,240,240)',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [4, 10],
                        lineHeight: 26,
                        // shadowBlur: 5,
                        // shadowColor: '#000',
                        // shadowOffsetX: 0,
                        // shadowOffsetY: 1,
                        position: 'right',
                        distance: 20,
                        rich: {
                            a: {
                                align: 'center',
                                color: '#fff',
                                fontSize: 18,
                                textShadowBlur: 2,
                                textShadowColor: '#000',
                                textShadowOffsetX: 0,
                                textShadowOffsetY: 1,
                                textBorderColor: '#333',
                                textBorderWidth: 2
                            },
                            b: {
                                color: '#333'
                            },
                            c: {
                                color: '#ff8811',
                                textBorderColor: '#000',
                                textBorderWidth: 1,
                                fontSize: 22
                            }
                        }
                    },
                }
            },
            {
                name: 'Infect',
                type: 'bar',
                label: {
                    show: true
                },
                data: [],
            },
            {
                name: 'Death',
                type: 'bar',
                label: {
                    show: true
                },
                data: [],
            }
        ]
    }
    useEffect(() => {

        let myChart = echarts.init(document.getElementById('view1'));
        try {
            let req = async () => {
                const { data,headers } = await axios.request(options)
                style.yAxis.data = data
                    .filter(obj => obj.rank>=1 && obj.rank<=6)
                    .map(obj => obj.Country)
                style.series[0].data = data
                    .filter(obj => obj.rank>=1 && obj.rank<=6)
                    .map(obj => obj.TotalRecovered)
                style.series[1].data = data
                    .filter(obj => obj.rank>=1 && obj.rank<=6)
                    .map(obj => obj.TotalCases)
                style.series[2].data = data
                    .filter(obj => obj.rank>=1 && obj.rank<=6)
                    .map(obj => obj.TotalDeaths)
                myChart.setOption(style)
                document.getElementById('latest').innerHTML = headers.date
            }
            req()

        } catch(e) {
            console.error(e)
        }
    }, [])

    return (
        <>
            <div id='view1'/>
            <p>Last Update Time:{nbsp}
                 <span id = 'latest'></span>
            </p>

        </>
    );
}

export default ListView;