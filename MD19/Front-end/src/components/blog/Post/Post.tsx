import React, { useContext } from "react";
import "./Post.css"
import logo from "../../assets/logo.svg";
import { BlogType } from "../../../api/types";
import { deleteBlog } from "../../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props ={
    post: BlogType
}

const Post = (({post}: Props) => {
    const queryClient = useQueryClient()

    const deleteBlogMutation = useMutation({
        mutationFn: deleteBlog,
        onSuccess: () =>{
            queryClient.invalidateQueries()
        }
      })
    
    const handleDelete = (() =>{
        if(post._id){
            deleteBlogMutation.mutate(post._id)
        }
    });

    
    return (
        <div className="post">
            <h2>Title: {post.title}</h2>
            <h2>Text: {post.text}</h2>
            <h2>Date: {post.date}</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
})

export default Post;