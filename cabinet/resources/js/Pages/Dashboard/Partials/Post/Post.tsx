import { useState } from "react";
 
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import CommentsList from "./CommentsList";

export default function Post({ post }) {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        console.log(showComments)
        setShowComments(!showComments);
    };
    return (
        <div className="post">
            <PostHeader
                author={post.author}
                createdAt={post.created_at}
                visibility={post.visibility}
            />
            <PostContent
                title={post.title}
                content={post.content}
                maxLength={100}
            />
            <PostActions
                likes={post.likes}
                comments={post.comments?.length ?? 0}
                share={post.share}
            />
            <PostFooter
                onToggleComments={toggleComments}
                // onLike={...}
                // onShare={...}
            />
            <CommentsList comments={post.comments} showComments={showComments}/>
        </div>
    );
}
