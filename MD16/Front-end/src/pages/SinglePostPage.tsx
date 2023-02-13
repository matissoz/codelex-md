import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPost } from "../api/api";
import { PostType } from "../api/types";
import SinglePost from "../components/Posts/SinglePostDisplay/singlePost";


const SinglePostPage = (() => {

    const { id } = useParams();

    const singlePostQuery = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
        keepPreviousData: true,
    });

    
    // if(currentID > maxCharacters) return <div>Character out of range...</div>;    
    if(singlePostQuery.isLoading) return <div>Loading..</div>;
    if(singlePostQuery.isError) return <div>Loading..</div>;
    

    const post: PostType = singlePostQuery.data[0];
    return(
        <>
            <SinglePost post={post}/>
        </>
    )
})

export default SinglePostPage ;