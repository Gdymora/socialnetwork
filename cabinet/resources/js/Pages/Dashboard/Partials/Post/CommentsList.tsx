import Comment from "./Comment";

export default function CommentsList({ comments, showComments }) {
    const commentsStyle = {
        display: showComments ? 'block' : 'none'
    };

    return (
        <div className="comments" style={commentsStyle}>                    
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
}