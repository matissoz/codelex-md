import React from 'react';
import { useState, useRef, useEffect } from 'react'

const Uzd2Png1 = (() =>{

    const inputRef = React.useRef<HTMLInputElement>(null);

    const[currValue, setCurrValue] = useState('');
    const[value, setValue] = useState(['']);

    function focus(e: { preventDefault: () => void; }){
        e.preventDefault();
        setValue([...value, currValue]);
        inputRef.current?.focus();
    }


    return(
        <div>
            <form onSubmit={focus}>
            <input type="text"
                ref={inputRef}
                value={currValue}
                onChange={e => setCurrValue(e.target.value)}/>
            <input type="submit" value="Submit"/>
            </form>
            <p>{value.map(value => <p key={1}>{value}</p>)}</p>
        </div>
    )
})


export default Uzd2Png1;