import { useMutation } from "@tanstack/react-query";
import React from "react";
import { addPost } from "../api/api";
import Form from "../components/Form/form";
import '../components/form/form.scss'

const CreatePost = (() => {

    const createPostMutation = useMutation({
        mutationFn: addPost,
    })

    return (
        <>
            <Form manipulation={createPostMutation}/>
        </>
    )
})

export default CreatePost;