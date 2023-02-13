import { PostType } from "../../api/types";
import Post from "./Post/post";
import './postDisplay.scss'

type Props = {
    posts: PostType[];
}

const PostDisplay = (({posts}: Props) => {
    return (
        <div className="post__display">
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    )
})

export default PostDisplay;