import React,{useState , useEffect} from 'react'
import '../styles/content.css'

function News({ country, catgory }) {
    const [headLine, setHeadLine] = useState([]);
    useEffect(() => {
        fetchData()
    }, [catgory,country])
    
    const fetchData = async()=>{
        const apiKey ='262ca29f445840a596e6301fc64290dd'
        try{

            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${catgory}&apiKey=${apiKey}`)
            const data = await res.json()
            console.log(data)
            setHeadLine(data.articles)

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
           {
               headLine.map((topline,index)=>(
                   <div className="content">
                       <h3 key={index} >{topline.content}</h3>
                       <p style={{color:"grey", float:"right", fontSize:"small"}} >{topline.publishedAt}</p>
                       <p style={{marginTop:"2em",fontSize:"small" ,color:"green"}} >{topline.description}</p>
                   </div>
               ))
           } 

        </div>
    )
}

export default News
