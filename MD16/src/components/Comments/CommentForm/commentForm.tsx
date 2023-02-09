import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";
import { addComment } from "../../../api/api";
import { CommentType } from "../../../api/types";
import './commentForm.scss'

type Props = {
    postId: number;
}

const CommentForm = (({postId}: Props) =>{

    const [authorVal, setAuthorVal] = useState('');
    const [textVal, setTextVal] = useState('');

    const createCommentMutation = useMutation({
        mutationFn: addComment,
    })

    const handlePost = (() =>{
        createCommentMutation.mutate({
            author: authorVal,
            text: textVal,
            postId: String(postId)
        })
        window.location.reload();
    });


    return (
    <div className="comment">
        <form onSubmit={handlePost} className="comment__form">
            <h3 className="form__title">Author</h3>
            <input required type="text"
                value={authorVal} 
                onChange={(e)=>{
                    setAuthorVal(e.target.value)
                }}
                placeholder="Arthur..."
            />

            <h3 className="form__title">Comment</h3>
            <input required type="text"
                value={textVal} 
                onChange={(e)=>{
                    setTextVal(e.target.value)
                }}
                placeholder="Comment..."
            />
            <br/>
            <button className="comment__btn">Post</button>
        </form>
    </div>
    )
})

export default CommentForm;