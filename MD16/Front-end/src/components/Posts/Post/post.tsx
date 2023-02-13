import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getComments } from "../../../api/api";
import { PostType } from "../../../api/types";
import './post.scss';

type Props = {
    post: PostType;
}

const Post = (({post}: Props) => {

    const navigate = useNavigate();
    const navigateToPost = () => {
        navigate(`/blog/${post.id}`);
    };
    
    const shortString =  post.text.substr(0, 60) +"..."
    
    return (
        <div className="post__card">
            <div className="wrapper">
                <img src={post.img} alt="Post image" className="image"/>
                <div className="text__wrapper">
                    <h3 className="post__title">{post.title}</h3>
                    <hr/>
                    <p className="post__text">
                        {shortString}
                    </p>
                    <a className="readmore__btn" onClick={navigateToPost}>READ MORE</a>
                </div>
            </div>
        </div>
    )
})

export default Post;