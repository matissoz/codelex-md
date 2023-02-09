import { UseQueryResult } from "@tanstack/react-query";
import { PostType } from "../api/types";
import PostDisplay from "../components/Posts/postDisplay";

type Props ={
    getQuery: UseQueryResult<PostType[], unknown>;
}

const Blog = (({getQuery}: Props) => {

    if(getQuery.isLoading) return <div>Loading..</div>;
    if(getQuery.isError) return <div>Loading..</div>;

    const posts: PostType[] = getQuery.data;

    return (
        <div>
            <PostDisplay posts={posts}/>
        </div>
    )
})

export default Blog;