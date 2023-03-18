import { useState } from 'react'
import * as Tone from 'tone'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const synth = new Tone.Synth().toDestination();
  const seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, 0.1, time);
    // subdivisions are given as subarrays
  }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
  
  const click = (async () => {
    if (Tone.Transport.state === "started") {
      Tone.Transport.pause();
      setIsPlaying(false);
    } else {
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  })
  
  return (
    <div className="App">
      <button onClick={click}> click</button>
    </div>
  )
}

export default App
