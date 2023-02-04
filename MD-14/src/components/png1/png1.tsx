import { useState, useRef, useEffect } from 'react'
import Uzd1Png1 from './uzd/uzd1';
import Uzd2Png1 from './uzd/uzd2';
import Uzd3Png1 from './uzd/uzd3';
import Uzd4Png1 from './uzd/uzd4';
import Uzd5Png1 from './uzd/uzd5';

const UzdevumiNoPng1 = (() => {
    return (
        <div>
            <h3>1.1. uz ielādi focus</h3>
            <Uzd1Png1 />
            <h3>1.2. uz submit focus</h3>
            <Uzd2Png1 />
            <h3>1.3. disable pogu uz pirmajām 5sekundēm</h3>
            <Uzd3Png1 />
            <h3>1.4. uz click show count</h3>
            <Uzd4Png1 />
            <h3>1.4. uz click show count</h3>
            <Uzd5Png1 />
        </div>
    );
});

export default UzdevumiNoPng1;