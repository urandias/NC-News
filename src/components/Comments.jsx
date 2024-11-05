import { useState, useEffect } from "react";
import CommentCard from './CommentCard';
import { fetchCommentsByArticleId } from "../../api";

export default function Comments({ articleId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (articleId) {
            fetchCommentsByArticleId(articleId).then((comments) => {
                setComments(comments);
            });
        }
    }, [articleId]);

    return (
        <div className="comments-section">
            <h2>Comments</h2>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} />
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
}
