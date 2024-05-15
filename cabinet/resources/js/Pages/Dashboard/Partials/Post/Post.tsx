import { useState } from "react";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import CommentsList from "./CommentsList";
import { PostType } from "@/types";
import Carousel from "./Carousel"; 

interface PostProps {
    post: PostType;
    onChangeUpdatePost?: (id: number) => void;
    onChangeDeletePost?: (id: number) => void;
}

export default function Post({ post, onChangeUpdatePost, onChangeDeletePost }: PostProps) {
    const [showComments, setShowComments] = useState(false); 
    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const onChangeUpdateId = (id: number) => {
        if (onChangeUpdatePost) { 
            onChangeUpdatePost(id);
        }
    }; 

    const onChangeDeleteId = (id: number) => {
        if (onChangeDeletePost) { 
            onChangeDeletePost(id);
        }
    };

    return (
        <div className="post"> 
            <PostHeader
                author={post.author}
                id={post.id}
                createdAt={post.created_at}
                visibility={post.visibility}
                onChangeUpdate={onChangeUpdateId}
                onChangeDelete={onChangeDeleteId}
            />
            <PostContent
                title={post.title}
                media={post.media}
                links={post.links}
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
            <CommentsList
                comments={post.comments}
                showComments={showComments}
            />
            {/* <Carousel users={randomUsersForFriendship}/> */} 
        </div>
    );
}
