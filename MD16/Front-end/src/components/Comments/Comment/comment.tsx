import { useMutation } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { deleteComment } from "../../../api/api";
import { CommentType } from "../../../api/types";
import './comment.scss'

type Props={
    data: CommentType;
}

const Commentary = (({data}: Props) =>{
    const DeleteCommentMutation = useMutation({
        mutationFn: deleteComment,
    });

    const handleDelete = (() =>{
        DeleteCommentMutation.mutate(data.id)
        window.location.reload();
    });

    return (
    <div className="comment__Wrapper">
        <span className="author">
            <h4>{data.author}:</h4>
        </span>
        <span className="commentary">
            <div>{data.text}</div>
        </span>
        <button onClick={handleDelete} className="comment__btn">Del</button>
    </div>
    )
})

export default Commentary