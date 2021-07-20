import React,{useState , useEffect} from 'react'

function News({ country, catgory }) {
    useEffect(() => {
        fetchData()
    }, [catgory,country])
    
    const fetchData = async()=>{
        const apiKey ='262ca29f445840a596e6301fc64290dd'
        try{

            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${catgory}&apiKey=${apiKey}`)
            const data = await res.json()
            console.log(data)

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h3>{country}</h3>
            <h3>{catgory}</h3>

        </div>
    )
}

export default News
