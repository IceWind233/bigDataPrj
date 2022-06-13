import {nanoid} from "nanoid";

import './index.css'

export default function NewsItems(props){
    const {title, link, pubDate} = props
    return (
        <div className="newsList" >
            <a href={link} target="_blank">
                <div>
                    <p className="newsTitle">{title}</p>
                    <p className="newsDate">Update Time:<br/>{pubDate}</p>
                </div>

            </a>
        </div>
    )

}