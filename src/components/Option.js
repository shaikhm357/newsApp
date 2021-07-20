import React,{useState} from 'react'
import News from './News';
function Option() {

    const [country, setCountry] = useState('in');
    const [catgory, setcatgory] = useState('science');

    return (
        <div className='otion' >
            <label>Select country </label>
            <select name="" id="country" onChange={(e)=>setCountry(e.target.value)} >
            <option value="in" >in</option>
            <option value="ar" >ar</option>
            <option value="at" >at</option>
            <option value="au" >au</option>
            <option value="be" >be</option>
            <option value="bg" >bg</option>
            <option value="br" >br</option>
            <option value="ca" >ca</option>
            <option value="ch" >ch</option>
            <option value="cn" >cn</option>
            <option value="co" >co</option>
            <option value="cu" >cu</option>
            <option value="cz" >cz</option>
            <option value="de" >de</option>
            <option value="eg" >eg</option>
            <option value="fr" >fr</option>
            <option value="gb" >gb</option>
            <option value="gr" >gr</option>
            <option value="hk" >hk</option>
            <option value="hu" >hu</option>
            <option value="id" >id</option>
            <option value="in" >in</option>
            <option value="ie" >ie</option>
            <option value="il" >il</option>
            <option value="it" >it</option>
            <option value="jp" >jp</option>
            <option value="kr" >kr</option>
            <option value="lt" >lt</option>
            <option value="lv" >lv</option>
            <option value="ma" >ma</option>
            <option value="mx" >mx</option>
            <option value="my" >my</option>
            <option value="ng" >ng</option>
            <option value="nl" >nl</option>
            <option value="no" >no</option>
            <option value="nz" >nz</option>
            <option value="ph" >ph</option>
            <option value="pl" >pl</option>
            <option value="pt" >pt</option>
            <option value="ro" >ro</option>
            <option value="rs" >rs</option>
            <option value="ru" >ru</option>
            <option value="sa" >sa</option>
            <option value="se" >se</option>
            <option value="sg" >sg</option>
            <option value="si" >si</option>
            <option value="sk" >sk</option>
            <option value="th" >th</option>
            <option value="tr" >tr</option>
            <option value="tw" >tw</option>
            <option value="ua" >ua</option>
            <option value="ve" >ve</option>
            <option value="za" >za</option>

                <option value="ae" >ae</option>
                <option value="us" >us</option>
            </select>

            <br />

            <label>Select catgory </label>
            <select name="" id="catgory" onChange={(e)=>setcatgory(e.target.value)} >
                <option value="science" >Science</option>
                <option value="sports" >Sports</option>
                <option value="business" >Business</option>
                <option value="entertainment" >Entartainment</option>
                <option value="general" >General</option>
                <option value="technology" >Technology</option>
                <option value="health" >Health</option>

            </select>
            <News country={country} catgory={catgory} />
        </div>
    )
}

export default Option
