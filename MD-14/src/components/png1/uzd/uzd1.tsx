import React from 'react';
import { useState, useRef, useEffect } from 'react'

const Uzd1Png1 = (() =>{

    const inputRef = React.useRef<HTMLInputElement>(null);

    function focus(){
        inputRef.current?.focus();
    }

    useEffect(() =>{
        focus();
    },[])

    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
})


export default Uzd1Png1;