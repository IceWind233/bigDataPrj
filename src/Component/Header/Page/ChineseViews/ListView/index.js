import {useEffect} from "react";

import * as echarts from 'echarts'
import axios from "axios";

import './index.css'

export default function ListView(props){
    const url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total'

    useEffect(()=>{
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
        let myChart = echarts.init(document.getElementById("chView1"))
       axios.get(url).then(
           res=> {
               style.yAxis.data=
                   res.data.data.areaTree
                       .filter(obj=>obj.name==="中国")[0]
                       .children.slice(0, 5)
                       .map(obj=>obj.name)

               style.series[1].data=
                   res.data.data.areaTree
                   .filter(obj=>obj.name==='中国')[0]
                   .children.slice(0, 5)
                   .map(obj=>obj.total.confirm)

               style.series[0].data=
                   res.data.data.areaTree
                       .filter(obj=>obj.name==='中国')[0]
                       .children.slice(0, 5)
                       .map(obj=>obj.total.heal)

               style.series[2].data=
                   res.data.data.areaTree
                       .filter(obj=>obj.name==='中国')[0]
                       .children.slice(0, 5)
                       .map(obj=>obj.total.dead)
               myChart.setOption(style)

           }
       ).catch(
           err => console.log(err)
       )
    },[])

    return <div id="chView1">

    </div>
}