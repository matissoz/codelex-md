export type PostType ={
    id: number,
    title: string,
    text: string,
    img: string,   
    imgId: string;
}

export type CommentType ={
    id: number,
    author: string,
    text: string, 
    postId: string;
}