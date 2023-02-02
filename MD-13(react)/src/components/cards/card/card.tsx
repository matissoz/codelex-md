import './card.css';
import { Note } from '../../../type';
import axios from 'axios';
import { useState } from 'react';

interface Props{
    data: Note;
}

const Card = ({data}: Props) =>{
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [imgID, setImgID] = useState("");

    const onDelete = ((id:number) =>{
        axios.delete<Note>(`http://localhost:3004/notes/${id}`)
        .then(() => {
        });
    })

    const onEdit = ((id:number) =>{
         axios.put<Note>(`http://localhost:3004/notes/${id}`, {
            title: title,
            text: text,
            img: `https://picsum.photos/id/${imgID}/300/300`
        }).then(() => {
        });
    })

    return(
        <div className='card'>
            <img src={data.img} className="card__img"/>
            <h2>
                {data.title}
            </h2>
            <p>
                {data.text}
            </p>
            <div className='button__wrapper'>
                <a className= "button" href="#edit">Edit</a>
                <button className= "button" onClick = {()=> onDelete(data.id)}>Delete</button>
            </div>

            <div className="scrn" id="edit">
            <form className='form'>
                <div>
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Text</label>
                    <input                         
                        type="text" 
                        value={text} 
                        onChange={e=>setText(e.target.value)}/>
                </div>
                <div>
                    <label>Image ID</label>
                    <input                         
                        type="number" 
                        value={imgID} 
                        onChange={e=>setImgID(e.target.value)}
                    />
                </div>
                <div className='form__button--wrapper'>
                    <a className= "button" href="/">Back</a>
                    <a className= "button" href="/" 
                    onClick = {()=> onEdit(data.id)}>Edit</a>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Card;