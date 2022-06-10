import './index.css'

function handleBlur(){

}

export default function NewsItems(props){
    const {title, newsId, link, pubDate} = props



    return (
        <div id={newsId} className="newsList" >
            <a href={link} target="_blank">
                <div>
                    <p className="newsTitle">{title}</p>
                    <p className="newsDate">Update Time:<br/>{pubDate}</p>
                </div>

            </a>
        </div>
    )

}