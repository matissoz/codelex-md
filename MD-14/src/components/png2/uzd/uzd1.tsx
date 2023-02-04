import React from 'react';
import { useState, useRef, useEffect } from 'react'
import "./uzd.css"

const Uzd1Png2 = (() =>{
    useEffect(() =>{
        console.log('first render')
    },[])

    useEffect(() =>{
        console.log('render')
    })

    const [count, setCount] = useState(0)
    const [currValue, setCurrValue] = useState("")

    const clickHandler = ((e: Event) => {
        e.preventDefault;
        console.log("changing count")
        setCount(count+1);
    })

    return(
        <div>
            <div className="wrap">
                <button onClick={clickHandler}>
                    +
                </button>
                <span className="kaste4">{count}</span>
                <input type="text"
                value={currValue}
                onChange={e =>{ 
                    setCurrValue(e.target.value)
                    console.log("changing value")
                }}/>
                <p>{currValue}</p>
            </div>
        </div>
    )
})


export default Uzd1Png2;