import axios from "axios";
import { PostType, CommentType } from './types'
 
export const getPosts = ()=> {
   return axios
    .get<PostType[]>(`http://localhost:3004/posts`)
    .then (({data}) => data);

}

export const getPost = (async (id: string = '1') => {
    const res = await axios
        .get<PostType[]>(`http://localhost:3004/posts?id=${id}`);
    return res.data;
})

export type FecthProps = {
    title: string | undefined;
    text: string | undefined;
    imgId: string | undefined;
    id?: string | undefined;
}

export const addPost = (async ({title, text, imgId, id}: FecthProps) => {
    const res = await axios
        .post<PostType>(`http://localhost:3004/posts`,{
            title,
            text,
            img:`https://picsum.photos/id/${imgId}/300/300`,
            imgId
        });
    return res.data;
})

export const editPost = (async ({title, text, imgId, id}: FecthProps) => {
    const res = await axios
        .put<PostType>(`http://localhost:3004/posts/${id}`,{
            title,
            text,
            img:`https://picsum.photos/id/${imgId}/300/300`,
            imgId
        });
    return res.data;
})

export const deletePost = (async (id:number) => {
    const res = await axios
        .delete<PostType>(`http://localhost:3004/posts/${id}`);
    return res.data;
})


export const getPostComments = (async (postId: number) => {
    const res = await axios
        .get<CommentType[]>(`http://localhost:3004/comments?postId=${postId}`);
    return res.data;
})

 export const deleteComment = (async (id:number) => {
    const res = await axios
        .delete<CommentType>(`http://localhost:3004/comments/${id}`);
    return res.data;
})

 export const deleteAllComments = (async (id:number) => {
    const res = await axios
        .delete<CommentType>(`http://localhost:3004/comments?postId=${id}`);
    return res.data;
})

type CommentProps={
    author: string | undefined;
    text: string | undefined;
    postId: string | undefined;
}

export const addComment = (async ({author, text, postId}: CommentProps) => {
    const res = await axios
        .post<CommentType>(`http://localhost:3004/comments`,{
            author,
            text,
            postId
        });
    return res.data;
})