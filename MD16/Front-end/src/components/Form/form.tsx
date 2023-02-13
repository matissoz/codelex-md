import { useMutation, UseMutationResult } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost, FecthProps } from "../../api/api";
import { PostType } from "../../api/types";
import { inputValidation } from "../../validation/validation";
import "./form.scss"

type Props = {
    manipulation: UseMutationResult<PostType, unknown, FecthProps, unknown>
    title?: string;
    text?: string;
    imgID?: string;
    postId?: string;
}

const Form = (({manipulation, title, text, imgID, postId}: Props) =>{

    //uploading image sectionstart
    const [upload, setUpload] = useState(false);
    const [file, setFile] = useState<FormData>();

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData(); 

        if(e.target.files != null){
            formData.append("image", e.target.files[0], e.target.files[0].name);
            setFile(formData);
        }
    }

    //uploading image section end

    const [titleVal, setTitleVal] = useState(title);
    const [textVal, setTextVal] = useState(text);
    const [imgIDVal, setImgIDVal] = useState(imgID);
    const [error, setError] = useState('');
    const formBtn = React.useRef<HTMLButtonElement>(null);

    const navigate = useNavigate();
    const navigateToBlog = () => {
        navigate(`/blog`);
        window.location.reload();
    };
    
    const handleSubmit = (() =>{
        const validation = inputValidation(String(titleVal), String(textVal));
        let imageOrFile: string | FormData | undefined = `https://picsum.photos/id/${imgIDVal}/300/300`;

        if(upload){
            imageOrFile = file;
        }

        if(validation != ''){
            setError(validation);
            setTimeout(() => {
                setError('');
            }, 2000)
        }else{
            manipulation.mutate({
                title: titleVal,
                text: textVal,
                img: imageOrFile,
                imgId: imgIDVal,
                upload: upload
            })
            navigateToBlog();
        }
    });

    return (
        <div className="form__wrapper">
            {error != '' && 
                <div><h2>{error}</h2></div>
            }
             <form onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();
                }} 
                className="form add_form">
                <h3 className="form__title">Title</h3>
                <input type="text"
                     value={titleVal} 
                     onChange={(e)=>{
                        setTitleVal(e.target.value)
                     }}
                     name="title"
                />
                <h3 className="form__text">text</h3>
                <input required type="text"
                    value={textVal}
                    onChange={(e)=>{
                        setTextVal(e.target.value)
                     }}
                     name="text"
                    />
                <h3 className="form__img">Image ID or file</h3>
            
                {!upload ? (
                    <input required type="number" 
                        value={imgIDVal}
                        onChange={(e)=>{
                            setImgIDVal(e.target.value)
                            }}
                        name="image-id"
                    />
                ):(
                    <input type="file"
                     onChange={handleFileSelected}/>
                )}

                <label className="switch">
                    <input type="checkbox" onChange={() => setUpload(!upload)}/>
                </label>

                <button className="form__button">Submit</button>
            </form>
        </div>
    )
})

export default Form;