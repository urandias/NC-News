import CommentCard from './CommentCard.jsx'
import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../../api";
import { useParams } from "react-router-dom";

export default function Comments() {
    const { articleId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCommentsByArticleId(articleId).then(comments => {
            setComments(comments);
        });
    }, []);

    return (
        <>
            <h2>Comments</h2>
            {comments.map((comment, index) => (
                <CommentCard key={index} comment={comment} />
            ))}
        </>
    )    
}