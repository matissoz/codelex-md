import React from 'react';
import { useState, useRef, useEffect } from 'react'
import "./uzd.css"

const Uzd1Png3 = (() =>{
    const box = useRef(null)

    const clickHandler = ((e: Event) => {

        if(box.current.style.backgroundColor == "gold"){
            box.current.style.backgroundColor = "blue";
        }else{
            box.current.style.backgroundColor = "gold";
        }
    })

    return(
        <div>
            <div className="wrap">
                <div 
                    ref={box}
                    className='kaste5'>
                </div>
                <button
                    onClick={clickHandler}
                >Change color</button>
            </div>
        </div>
    )
})


export default Uzd1Png3;