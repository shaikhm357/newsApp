import React,{useState} from 'react'
import News from './News';
function Option() {

    const [country, setCountry] = useState('in');
    const [catgory, setcatgory] = useState('science');

    return (
        <div>
            <label>select country </label>
            <select name="" id="country" onChange={(e)=>setCountry(e.target.value)} >
                <option value="in" >in</option>
                <option value="us" >us</option>
            </select>
            <br />
            <label>select catgory </label>
            <select name="" id="catgory" onChange={(e)=>setcatgory(e.target.value)} >
                <option value="science" >science</option>
                <option value="sports" >sports</option>
            </select>
            <h3>{country }{catgory}</h3>
            <News country={country} catgory={catgory} />
        </div>
    )
}

export default Option
