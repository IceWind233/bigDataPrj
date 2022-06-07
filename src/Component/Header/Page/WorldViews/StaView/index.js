import React,{useEffect} from 'react';
import axios from "axios";
import echart from "echarts"

const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/',
    headers: {
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'X-RapidAPI-Key': '981fe59292msh92c84b0c0ac4bc2p12490cjsn898f180da505'
    }
};
const url = ' https://pandemicdatalake.blob.core.windows.net/public/curated/covid-19/bing_covid-19_data/latest/bing_covid-19_data.json'
// 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail'
function StaView(){
    useEffect(()=>{
        try {
            let req = async() => {
                const {data} =await axios.get(url)
                console.log(data)
            }
            req();
        }catch (err){
            console.log(err)
        }

    }, [])

    return(
        <div>

        </div>
    )
}
export default StaView