import { PostType, RandomUserForFriendship } from "@/types";
import Post from "./Post";
import ParentSayPost from "../ModalSay/ParentSayPost";
import { useEffect, useState } from "react";

interface PostsListProps {
    posts: PostType[];
}

export default function PostsList({ posts }: PostsListProps) {
    const [postData, setPostData] = useState<PostType | undefined>(); 
    
    const onChangeModal = (id: number) => {
        
        const post = posts.find((post) => post.id === id); 
        console.log(id, post)
        if (post) { 
            setPostData({...post});    
        }
    };
    
    return (
        <>
            <div className="posts">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        onChangeUpdatePost={onChangeModal}
                    />
                ))}
            </div> 
            {postData && <ParentSayPost postData={postData} />}
        </>
    );
}
