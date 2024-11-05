
export function CommentCard({ comment }) {
    return (
        <div className="comment-card">
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
        </div>
    )
}

