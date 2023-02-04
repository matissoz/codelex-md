import React, { MouseEventHandler } from 'react';
import "./uzd.css"
import { useState, useRef, useEffect } from 'react'

const Uzd4Png1 = (() =>{

    const [count, setCount] = useState(0)

    const clickHandler = ((e: Event) => {
        e.preventDefault;
        setCount(count+1);
    })

    return(
        <div>
            <div className="wrap">
                <button onClick={clickHandler}>
                    Poga {count}
                </button>
                <span className="kaste4">{count * 2}</span>
            </div>
        </div>
    )
})


export default Uzd4Png1;