import React, { useEffect, useState } from 'react'
import { Note, Page} from '../type';
import axios from 'axios';
import "./addPage.css";

interface Props{
    BackBtnHandler: () => void;
}

const AddPage = ({BackBtnHandler}: Props) =>{
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [imgID, setImgID] = useState("");
    
    const SubmitBtnHandler = ((e:any) =>{
        e.preventDefault();
        axios.post<Note>('http://localhost:3004/notes', {
            title: title,
            text: text,
            img: `https://picsum.photos/id/${imgID}/300/300`
        }).then(() => {
            BackBtnHandler();
        });
    });

    return(
        <div>
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
                <div >
                <button onClick={BackBtnHandler}>Back</button>
                <button onClick={SubmitBtnHandler}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddPage;