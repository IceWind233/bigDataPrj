import {useState} from "react";

import {Select, Input} from 'antd';
import {nanoid} from "nanoid";

import CakeView from "./CakeView";
import Charts from "./Charts";
import './index.css'

export default function StaView(props){
    const[city, setCity]=useState('天津')

    const CITY=[
        "台湾",
        "香港",
        "湖北",
        "上海",
        "吉林",
        "广东",
        "北京",
        "福建",
        "陕西",
        "河南",
        "浙江",
        "黑龙江",
        "山东",
        "四川",
        "江苏",
        "云南",
        "内蒙古",
        "河北",
        "天津",
        "辽宁",
        "广西",
        "湖南",
        "江西",
        "安徽",
        "新疆",
        "重庆",
        "甘肃",
        "山西",
        "海南",
        "贵州",
        "青海",
        "宁夏",
        "澳门",
        "西藏"
    ]
    const url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total'
    const {Option} =Select

    return<div id={"selectPro"}>
        <Charts/>
        <div>
            <Input.Group size="default">
                <Select defaultValue="天津" className="select" onChange={c => setCity(c)}>
                    {CITY.map(obj => {
                        return <Option key={nanoid()} value={obj} compact>{obj}</Option>
                    })}
                </Select>
            </Input.Group>
            <CakeView now={city}/>
        </div>

    </div>
}