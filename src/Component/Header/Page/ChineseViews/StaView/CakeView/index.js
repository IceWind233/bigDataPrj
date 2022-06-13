import {useEffect} from "react";

import * as echarts from 'echarts'
import axios from "axios";

import './index.css'

export default function CakeView(props){

    let style = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: null,
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [{value: 0, name: 'TotalCases'},
                        {value: 0, name: 'TotalDeaths'},
                        {value: 0, name:'TotalRecovered'}
                ]
            }
        ]
    };
    const url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total'

    useEffect(()=>{

        let myChart = echarts.init(document.getElementById('chView3'))
        axios.get(url).then(
            res=>{
                style.series[0].data[0].value=
                    res.data.data.areaTree
                        .filter(obj=>obj.name==='中国')[0].children
                        .filter(obj=>obj.name===props.now)[0].total.confirm
                style.series[0].data[1].value=
                    res.data.data.areaTree
                        .filter(obj=>obj.name==='中国')[0].children
                        .filter(obj=>obj.name===props.now)[0].total.dead
                style.series[0].data[2].value=
                    res.data.data.areaTree
                        .filter(obj=>obj.name==='中国')[0].children
                        .filter(obj=>obj.name===props.now)[0].total.heal
                myChart.setOption(style)

            }
            ).catch(
                err=>console.log(err)
        )
        return myChart.clear()
    },[props])

    return<div id="chView3">

    </div>
}