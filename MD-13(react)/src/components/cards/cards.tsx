import './cards.css'
import React, { useEffect, useState } from 'react'
import { Note } from '../../type';
import axios from 'axios';
import Card from './card/card';


const CardsDisplay = () =>{
    const [noteData, setNoteData] = useState<Note[]>();
    const [loaded, setLaoded] = useState(false);

    // useEffect(() =>{
    //   axios
    //     .get<Note[]>('http://localhost:3004/notes')
    //     .then(({ data }) => {
    //       setNoteData(data);
    //       setLaoded(true)
    //       console.log()
    //     });
    // },[noteData]) viss strādāja, bet rodas infinite loops

    useEffect(() =>{
      axios
        .get<Note[]>('http://localhost:3004/notes')
        .then(({ data }) => {
          setNoteData(data);
          setLaoded(true)
          console.log()
        });
    },[])

    if(!loaded){
      return <h1>Loading</h1>
    }
    return (
        <div className='cards__display'>
            {loaded && noteData &&

            noteData.map((data) => <Card key={data.id} data={data}/>)

            }
        </div>
    )
}

export default CardsDisplay;