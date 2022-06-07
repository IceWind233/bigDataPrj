
import './index.css'
import Ice from "./icon/Cache_16e3d40b6662e939..jpg"
import LY from "./icon/QQ图片20220607151539.jpg"
import LM from "./icon/QQ图片20220607151422.jpg"
import HX from "./icon/QQ图片20220607151509.jpg"
import MYF from "./icon/QQ图片20220607151524.jpg"

export default function Home(props){

    return <div id="page">
        <div id="infer">
            <p className="inf">新型冠状病毒肺炎（Corona Virus Disease 2019，COVID-19），简称“新冠肺炎”，世界卫生组织命名为“2019冠状病毒病” ，</p><br/>
            <p className="inf">是指2019新型冠状病毒感染导致的肺炎。2019年12月以来，湖北省武汉市部分医院陆续发现了多例有华南海鲜市场暴露史的不明原因肺炎病例，</p><br/>
            <p className="inf">证实为2019新型冠状病毒感染引起的急性呼吸道传染病。</p><br/>
            <p className="inf">该项目利用现有API，即将数据总结并可视化方便相关人员查看。</p>
        </div>

            <div className="aboutImg">
                <a href="https://github.com/IceWind233" target="_blank">
                    <img className="image" src={Ice}/>
                </a>
                <a><img className="image" src={LY}/></a>
                <a><img className="image" src={LM}/></a>
                <a><img className="image" src={HX}/></a>
                <a><img className="image" src={MYF}/></a>

            </div>

    </div>
}