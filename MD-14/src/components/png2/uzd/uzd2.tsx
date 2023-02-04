import React from 'react';
import { useState, useRef, useEffect } from 'react'
import "./uzd.css"

const Uzd2Png2 = (() =>{
    useEffect(() =>{
        setCount(100)
    },[])

    const [count, setCount] = useState(0)
    const [currValue, setCurrValue] = useState("")

    const clickHandler = ((e: Event) => {
        e.preventDefault;
        setCount(count+1);
    })

    return(
        <div>
            <div className="wrap">
                <button onClick={clickHandler}>
                    +
                </button>
                <span className="kaste4"
                    style={{fontSize:`${count}px`}}>
                    {count}
                </span>
                <input type="text"
                value={currValue}
                onChange={e =>{ 
                    setCurrValue(e.target.value)
                    document.title = currValue;
                }}/>
                <p>{currValue}</p>
            </div>
        </div>
    )
})

export default Uzd2Png2;