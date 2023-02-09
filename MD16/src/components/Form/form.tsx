import { useMutation, UseMutationResult } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost, FecthProps } from "../../api/api";
import { PostType } from "../../api/types";
import "./form.scss"

type Props = {
    manipulation: UseMutationResult<PostType, unknown, FecthProps, unknown>
    title?: string;
    text?: string;
    imgID?: string;
    postId?: string;
}

const Form = (({manipulation, title, text, imgID, postId}: Props) =>{

    const [titleVal, setTitleVal] = useState(title);
    const [textVal, setTextVal] = useState(text);
    const [imgIDVal, setImgIDVal] = useState(imgID);

    const navigate = useNavigate();
    const navigateToBlog = () => {
        navigate(`/blog`);
        window.location.reload();
    };

    const handleSubmit = (() =>{
        manipulation.mutate({
            title: titleVal,
            text: textVal,
            imgId: imgIDVal,
            id: postId
        })
        navigateToBlog();
    });

    return (
        <div className="form__wrapper">
             <form onSubmit={handleSubmit} className="form add_form">
                <h3 className="form__title">Title</h3>
                <input required type="text"
                     value={titleVal} 
                     onChange={(e)=>{
                        setTitleVal(e.target.value)
                     }}
                />
                <h3 className="form__text">text</h3>
                <input required type="text"
                    value={textVal}
                    onChange={(e)=>{
                        setTextVal(e.target.value)
                     }}
                    />
                <h3 className="form__img">Image ID</h3>
                <input required type="number" 
                    value={imgIDVal}
                    onChange={(e)=>{
                        setImgIDVal(e.target.value)
                     }}
                />
                <button className="form__button">Submit</button>
            </form>
        </div>
    )
})

export default Form;