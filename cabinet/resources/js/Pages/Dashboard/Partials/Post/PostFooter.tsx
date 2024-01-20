interface PostFooterProps {
    onToggleComments: () => void;
    // Ви можете додати інші пропси, якщо потрібно
}
export default function PostFooter({ onToggleComments }: PostFooterProps) {
    if (typeof onToggleComments !== "function") {
        console.error("onToggleComments should be a function", onToggleComments);
    }
    return (
        <div className="post-footer">
            <div className="flex justify-content-center align-items-center">
                <button className="like-button">Like</button>
            </div>
            <div className="flex justify-content-center align-items-center">
                <button
                    className="like-button comment-button"
                    onClick={onToggleComments}
                >
                    Comment
                </button>
            </div>
            <div className="flex justify-content-center align-items-center">
                <button className="like-button">Share</button>
            </div>
        </div>
    );
}
