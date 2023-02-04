import React from 'react';
import { useState, useRef, useEffect } from 'react'

const Uzd3Png1 = (() =>{

    const [disabled, setDisabled] = useState(true)
    const [pogaStatus, setPogaStatus] = useState("nav aktīva")
    useEffect(() =>{
        setTimeout(() =>{
            setDisabled(false)
            setPogaStatus("aktīva")
        },5000)
    },[])


    return(
        <div>
            <button disabled ={disabled}>
                Poga {pogaStatus}
            </button>
        </div>
    )
})


export default Uzd3Png1;