import React, {useEffect} from 'react';

import axios from "axios";
import * as echarts from "echarts";

import './index.css'

let style={
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: 'COVID History Of Specific Province'
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
        {
            name: 'Cure',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: '#a0d911'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#eaff8f'
                    },
                    {
                        offset: 1,
                        color: '#a0d911'
                    }
                ])
            },
            data: []
        },
        {
            name: 'Input',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: '#fadb14'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#fff566'
                    },
                    {
                        offset: 1,
                        color: '#fadb14'
                    }
                ])
            },
            data: []
        },
    ]
};

Array.prototype.mMap = function (){
    const arr = this
    var arr2=[]
    const temp = arr[0]
    for (var i = 0; i < arr.length-1; i++){
        if(i == 0)arr2.push(0)
            else if(i === 1)arr2[1] = arr[1] - temp
        else{
            arr2[i] = arr[i] - arr[i-1]
        }
    }
    return arr2
}

export default function Charts(props){
    const url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total'

    useEffect(()=>{
        let myChart = echarts.init(document.getElementById('chView2'))
        axios.request(url).then(
            res=> {
                style.xAxis.data =
                    res.data.data.chinaDayList
                        .map(obj=>obj.date)
                style.series[0].data =
                    res.data.data.chinaDayList
                        .map(obj=>obj.today.confirm)
                style.series[1].data =
                    res.data.data.chinaDayList
                    .map((obj, i)=>obj.total.dead).mMap()

                style.series[2].data =
                    res.data.data.chinaDayList
                        .map(obj=>obj.total.heal).mMap()
                style.series[3].data =
                    res.data.data.chinaDayList
                        .map(obj=>obj.today.input)


                myChart.setOption(style)
            }
        ).catch(
            err => console.log(err)
        )
        return myChart.clear()
    }, [props.now])

    return  <div id="chView2">
    </div>
}