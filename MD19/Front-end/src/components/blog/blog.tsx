import React, { useContext } from "react";
import "./blog.css"
import logo from "../../assets/logo.svg";
import { BlogContext } from "../../blogContext";
import Post from "./Post/Post";


const BlogScrn = (() => {
    const Blog = useContext(BlogContext)



    return (
        <div>
            {Blog.map((blog) =><Post post={blog} />)}
        </div>
    )
})

export default BlogScrn;