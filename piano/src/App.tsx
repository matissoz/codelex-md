import { useEffect, useState } from 'react'
import kick from './assets/sounds/kick.wav'
import kick2 from './assets/sounds/kick2.wav'
import clap from './assets/sounds/clap.wav'
import clap2 from './assets/sounds/clap2.wav'
import snare from './assets/sounds/snare2.wav'
import snare2 from './assets/sounds/snare2.wav'
import cymbal from './assets/sounds/cymbal.wav'
import perc from './assets/sounds/perc.wav'
import shaker from './assets/sounds/shaker.wav'
import firework from './assets/firework.gif'
import cat from './assets/cat.gif'
import explosion from './assets/explosion.gif'
import slap from './assets/slap.png'
import './App.css'
import Key from './components/drum/key'

function App() {

  const sounds = [
    {
      key:"q",
      sound: kick,
    },
    {
      key:"w",
      sound: clap,
    },
    {
      key:"e",
      sound: perc,
    },
    {
      key:"a",
      sound: kick2,
    },
    {
      key:"s",
      sound: clap2,
    },
    {
      key:"d",
      sound: cymbal,
    },
    {
      key:"z",
      sound: snare,
    },
    {
      key:"x",
      sound: snare2,
    },
    {
      key:"c",
      sound: shaker,
    }
  ]

  const [playing, setPlaying] = useState<string | null>(null)
  const [effects, setEffects] = useState(false);
  const [effects2, setEffects2] = useState(false);
  const [effects3, setEffects3] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      let found = sounds.find(sound => sound.key === e.key.toLowerCase())
      if(found){
        setPlaying(found.key)
        play(found.sound)
        setTimeout(() => {
          setPlaying(null)
        }, 150)
        if(found.key == "e"){       
          setEffects(true)
          setTimeout(() => {
            setEffects(false)
          }, 500)
        }
        if(found.key == "q" || found.key == "a"){       
          setEffects2(true)
          setTimeout(() => {
            setEffects2(false)
          }, 500)
        }
        if(found.key == "w" || found.key == "s"){       
          setEffects3(true)
          setTimeout(() => {
            setEffects3(false)
          }, 500)
        }
      }

    })
  }, [])

  const play = ((sound: string) => {
    new Audio(sound).play()
  })

  return (
    <div className="App">
      {effects && 
        <div className='effects'>
          <img src={firework} width="550"/>
          <img src={cat}/>
        </div>
      }
      {effects2 && 
        <div className='effects'>
          <img src={explosion} width="550"/>
        </div>
      }
      {effects3 && 
        <div className='effects'>
          <img src={slap} width="550"/>
        </div>
      }
      <div className="drum-machine">
        {sounds.map(key => 
        <Key 
        playing={playing}
        text={key.key} 
        onClick={() => {
          setPlaying(key.key)
          setEffects(true)
          play(key.sound)
          setTimeout(() => {
            setPlaying(null)
          }, 150)
          setTimeout(() => {
            setEffects(false)
          }, 500)
        }}/>
        )}
      </div>
    </div>
  )
}

export default App

