import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UzdevumiNoPng1 from './components/png1/png1'
import UzdevumiNoPng2 from './components/png2/png2'
import UzdevumiNoPng3 from './components/png3/png3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Uzdevumi no 1.bildes</h1>
      <UzdevumiNoPng1 />
      <hr/>
      <h1>Uzdevumi no 2.bildes</h1>
        <UzdevumiNoPng2 />
      <h1>Uzdevumi no 3.bildes</h1>
        <UzdevumiNoPng3 />
    </div>
  )
}

export default App
