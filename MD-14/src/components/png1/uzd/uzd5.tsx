import React, { MouseEventHandler } from 'react';
import "./uzd.css"
import { useState, useRef, useEffect } from 'react'

const Uzd5Png1 = (() =>{

    const [select, setSelect] = useState("")
    const [allColours, setAllcolours] = useState([]);

    const selectHandler = ((e) =>{
        setSelect(e.target.value)
    })

    const clickHandler = ((e: Event) => {
        e.preventDefault;
        setAllcolours([...allColours, select])
    })

    return(
        <div className='wrap'>
            <div className='wrap5'>
                <select name="color" value={select} onChange={selectHandler}>
                    <option value="">None</option>
                    <option value='red'>red</option>
                    <option value='blue'>blue</option>
                    <option value='green'>green</option>
                    <option value='pink'>pink</option>
                </select>
                <button onClick={clickHandler}>+</button>
            </div>
            <div className="kastes">
                {allColours && 
                allColours.map((kaste,index) => 
                <div style={{backgroundColor:`${kaste}`}} 
                className='kaste5' key={index} >
                    {kaste}
                </div>
                )}
            </div>
        </div>
    )
})


export default Uzd5Png1;