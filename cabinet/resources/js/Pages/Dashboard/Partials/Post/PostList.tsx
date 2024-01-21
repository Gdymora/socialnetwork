import { PostType, RandomUserForFriendship } from "@/types";
import Post from "./Post";

interface PostsListProps {
    posts: PostType[];
}

export default function PostsList({ posts }: PostsListProps) {
    return (
        <div className="posts">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
