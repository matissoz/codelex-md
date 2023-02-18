import axios from "axios";
import { BlogType } from './types'
 
export const getBlog = ()=> {
    return axios
     .get<BlogType[]>(`http://localhost:3004/all-blog`)
     .then (({data}) => data);
} 

export const addBlog  = (async ({title, text}: BlogType) => {
    const res = await axios
        .post<BlogType>(`http://localhost:3004/add-blog`,{
            title, 
            text
        });
    return res.data;
})


export const deleteBlog  = (async (id:string) => {
    const res = await axios
        .delete<BlogType>(`http://localhost:3004/delete-blog/${id}`)
    return res.data;
})