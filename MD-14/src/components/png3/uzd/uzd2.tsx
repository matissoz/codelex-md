import React from 'react';
import { useState, useRef, useEffect } from 'react'
import "./uzd.css"

const Uzd2Png3 = (() =>{
    const box = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement | null>(null)

    return(
        <div>
            <div ref={wrapper} className="wrap">
                <div 
                    ref={box}
                    className='kaste2'>
                </div>
            </div>
                <button
                    onClick={() =>  wrapper.current!.innerHTML += `<div class='kaste2'></div>`}
                >
                    Clone div
                </button>
        </div>
    )
})

export default Uzd2Png3;