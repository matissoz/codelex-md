import { useState, useRef, useEffect } from 'react'
import Uzd1Png3 from './uzd/uzd1';
import Uzd2Png3 from './uzd/uzd2';
import Uzd3Png3 from './uzd/uzd3';


const UzdevumiNoPng3 = (() => {
    return (
        <div>
            <h3>1.1. count + input</h3>
            <Uzd1Png3 />
            <h3>1.2. uz submit focus</h3>
            <Uzd2Png3 />
            <h3>1.2. uz submit focus</h3>
            <Uzd3Png3 />
            <hr/>
        </div>
    );
});

export default UzdevumiNoPng3;