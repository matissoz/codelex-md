import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteComment, deletePost, editPost } from '../../../api/api';
import { PostType } from '../../../api/types';
import CommentSection from '../../Comments/CommentSection/commentSection';
import Form from '../../Form/form';
import './singlePost.scss'

type Props = {
    post: PostType;
}

const SinglePost = (({post}: Props) => {

    const navigate = useNavigate();
    const navigateToBlog = () => {
        navigate(`/blog`);
    };
    
    //Delete
    const DeletePostMutation = useMutation({
        mutationFn: deletePost,
    })
    

    const handleDelete = (() =>{
        DeletePostMutation.mutate(post.id)
        navigateToBlog();
        window.location.reload();
    });



    //Edit
    const [editing, isEditing] = useState(false);
    const handleEditMode = (() =>{
        isEditing(!editing);
    })

    const EditPostMutation = useMutation({
        mutationFn: editPost,
    })

    return (
        <>
            <div className="sp_post__display">
                <img 
                    src={post.img} 
                    alt="Post image" className="image"
                />
                {editing ? (
                    <div className="sp_text__wrapper">
                        <Form 
                            manipulation={EditPostMutation}
                            title={post.title}
                            text={post.text}
                            postId={String(post.id)}
                            imgID={post.imgId}   
                        />
                    </div>
                ):(
                    <div className="sp_text__wrapper">
                        <h3 className="sp_post__title">
                            {post.title}
                        </h3>
                        <hr/>
                        <p className="sp_post__text">
                            {post.text}
                        </p>
                        <div className='button__wrapper'>
                            <button className='form__button sp__btn'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    handleEditMode();
                                }}
                            >
                                Edit
                            </button>
                            <button className='form__button sp__btn'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    handleDelete();
                                }}
                            >Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <CommentSection postId={post.id}/>
        </>
    )
})

export default SinglePost;