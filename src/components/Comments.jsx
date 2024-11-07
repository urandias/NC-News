import { useState, useEffect } from "react";
import CommentCard from './CommentCard';
import { fetchCommentsByArticleId } from "../../api";

export default function Comments({ articleId }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (articleId) {
            setLoading(true)
            fetchCommentsByArticleId(articleId)
            .then((comments) => {
                setComments(comments);
                setError(null)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setError('Failed to load coments. Please try again later.')
                setLoading(false)
            })
        }
    }, [articleId]);

    if (loading) {
        return <p>Loading comments...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="comments-section">
            <h2>Comments</h2>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} />
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
}
