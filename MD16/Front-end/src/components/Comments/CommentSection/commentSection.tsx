import { useQuery } from '@tanstack/react-query';
import { getPostComments } from '../../../api/api';
import { CommentType } from '../../../api/types';
import Commentary from '../Comment/comment';
import CommentForm from '../CommentForm/commentForm';
import './commentSection.scss'

type Props = {
    postId: number;
}

const CommentSection = (({postId}: Props) =>{

    const getCommentQuery = useQuery({
        queryKey: ['comment', postId],
        queryFn: () => getPostComments(postId),
        keepPreviousData: true,
    });

    if(getCommentQuery.isLoading) return <div>Loading..</div>;
    if(getCommentQuery.isError) return <div>Loading..</div>;

    const commentData: CommentType[] = getCommentQuery.data;

    return (
    <div className="commentSection">
        <h2>Comment section</h2>
        <div className='commentary__border'>
            {commentData.map(commentData => 
            <div className='commentary__Wrapper' key={commentData.id}>
                <Commentary data={commentData}/>
            </div>
            )}
        </div>
        <h2>Add new commentary</h2>
        <CommentForm postId={postId}/>
    </div>
    )
})

export default CommentSection