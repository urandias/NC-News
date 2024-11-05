

export default function CommentCard({ comment }) {
    return (
        <div className="comment-card">
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p className="comment-date">Posted on: {new Date(comment.created_at).toLocaleDateString()}</p>
        </div>
    );
}
