import React from 'react';
import { useState, useRef, useEffect } from 'react'
import "./uzd.css"

const Uzd3Png3 = (() =>{
    const box = useRef<HTMLDivElement | null>(null)

    const clickHandler = ((e: Event) => {
        if(box.current!.style.position == 'absolute'){
            box.current!.style.position = 'static';
            box.current!.innerHTML= 'esmu atpakaļ';
        }else{
            box.current!.style.position = 'absolute';
            box.current!.style.top = '0';
            box.current!.style.right = '0';
            box.current!.innerHTML= 'esmu stūrī';
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
                >pārvietot</button>
            </div>
        </div>
    )
})

export default Uzd3Png3;