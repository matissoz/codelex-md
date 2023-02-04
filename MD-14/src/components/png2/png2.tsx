import { useState, useRef, useEffect } from 'react'
import Uzd1Png2 from './uzd/uzd1';
import Uzd2Png2 from './uzd/uzd2';


const UzdevumiNoPng2 = (() => {
    return (
        <div>
            <h3>1.1. count + input</h3>
            <Uzd1Png2 />
            <h3>1.2. count = text size + input = document title</h3>
            <Uzd2Png2 />
            <hr/>
        </div>
    );
});

export default UzdevumiNoPng2;