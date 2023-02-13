import axios from "axios";
import { PostType, CommentType } from './types'
 
export const getPosts = ()=> {
   return axios
    .get<PostType[]>(`http://localhost:3005/posts`)
    .then (({data}) => data);

}

export const getPost = (async (id: string | undefined) => {
    const res = await axios
        .get<PostType[]>(`http://localhost:3005/posts/${id}`);
    return res.data;
})

export type FecthProps = {
    title: string | undefined;
    text: string | undefined;
    imgId: string | undefined;
    img: FormData | string | undefined;
    id?: string | undefined;
    upload: boolean;
}

export const addPost = (async ({title, text, img, imgId, upload}: FecthProps) => {
    const res = await axios
        .post<PostType>(`http://localhost:3005/posts`,{
            title,
            text,
            img,
            imgId,
            upload
        });
    return res.data;
})

export const editPost = (async ({title, text, imgId, id}: FecthProps) => {
    const res = await axios
        .put<PostType>(`http://localhost:3005/posts/${id}`,{
            title,
            text,
            img:`https://picsum.photos/id/${imgId}/300/300`,
            imgId
        });
    return res.data;
})

export const deletePost = (async (id:number) => {
    const res = await axios
        .delete<PostType>(`http://localhost:3005/posts/${id}`);
    return res.data;
}) 


export const getPostComments = (async (postId: number) => {
    const res = await axios
        .get<CommentType[]>(`http://localhost:3005/comments/${postId}`);
    return res.data;
})

 export const deleteComment = (async (id:number) => {
    const res = await axios
        .delete<CommentType>(`http://localhost:3005/comments/${id}`);
    return res.data;
})

type CommentProps={
    author: string | undefined;
    text: string | undefined;
    postId: string | undefined;
}

export const addComment = (async ({author, text, postId}: CommentProps) => {
    const res = await axios
        .post<CommentType>(`http://localhost:3005/comments`,{
            author,
            text,
            postId
        });
    return res.data;
})

export const addImage= (async (image: FormData) => {
    const res = await axios
        .post<CommentType>(`http://localhost:3005/upload-image`, image);
    return res.data;
})

export const getImages= (async () => {
    const res = await axios
        .get(`http://localhost:3005/all-image-link`);
    return res.data;
})

