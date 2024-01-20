import moment from "moment";

export default function Comment({ comment }) {
    const defaultImageUrl = "assets/images/noimg.png";
    const dateString = comment.created_at;
    const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");

    return (
        <> 
                <input type="text" placeholder="write coment" />
                <div className="comment">
                    <div className="header flex">
                        <div className="circle">
                            <img
                                src={
                                    comment.author_comments.profile_image_url ||
                                    defaultImageUrl
                                }
                                alt={`Avatar ${comment.author_comments.name}`}
                            />
                        </div>
                        <div className="comment-info flex align-items-center">
                            <h3>
                                {comment.author_comments.name}{" "}
                                {comment.author_comments.last_name}
                            </h3>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                    <p className="comment-text">{comment.content}</p>
                    {comment.childComments &&
                        comment.childComments.length > 0 && (
                            <div className="child-comments">
                                {comment.childComments.map((childComment) => (
                                    <Comment
                                        key={childComment.id}
                                        comment={childComment}
                                    />
                                ))}
                            </div>
                        )}
                </div> 
        </>
    );
}
