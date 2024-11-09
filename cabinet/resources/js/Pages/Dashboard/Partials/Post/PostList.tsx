import { PostType, PostsListProps, RandomUserForFriendship } from "@/types";
import Post from "./Post";
import ParentSayPost from "../ModalSay/ParentSayPost";
import { useEffect, useState } from "react";
import useAxios from "@/Hooks/useAxios";
import { toast } from "react-toastify";



export default function PostsList({ posts }: PostsListProps) {
    const {
        sendRequest: sendRequestDelete,
        data: dataDelete,
        loading: loadingDelete,
        error: errorDelete,
    } = useAxios();

    const [postData, setPostData] = useState<PostType | undefined>();
    const [postDelete, setPostDelete] = useState<PostType | undefined>();
    const [postsArray, setPostsArray] = useState<PostType[]>();

    useEffect(() => {
        if (posts) {
            setPostsArray(posts);
        }
    }, [posts]);

    useEffect(() => {
        if (dataDelete && postDelete) {
            toast.success("Success delete");
            const post = posts.filter((post) => post.id != postDelete.id);
            if (post) {
                setPostsArray(post);
            }
        }
    }, [dataDelete]);

    useEffect(() => {
        const errorNow: any = errorDelete;
        if (errorNow) {
            toast.error("Error:", errorNow.message);
        }
    }, [errorDelete]);

    const onChangeModal = (id: number) => {
        const post = posts.find((post) => post.id === id);
        if (post) {
            setPostData({ ...post });
        }
    };

    const onChangeDelete = (id: number) => {
        const post = posts.find((post) => post.id === id);
        if (post) {
            setPostDelete(post);
        }
        handleDelete(id);
    };

    const handleDelete = (id: number) => {
        sendRequestDelete(
            "delete",
            {},
            {
                url: `/posts/${id}`,
            }
        );
    };

    const handleCreatePost = (postData: PostType) => {
        console.log(postData)
        if (postsArray) {
            setPostsArray([...postsArray, postData]);
        }
    };

    const handleUpdatePost = (postData: PostType) => {
        console.log(postData)
        if (postsArray) {
            const updatedPosts = postsArray.map((post) => {
                if (post.id === postData.id) {
                    return postData;
                }
                return post;
            });
            setPostsArray(updatedPosts);
        }
    };

    return (
        <>
            <div className="posts">
                {postsArray &&
                    postsArray.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                            onChangeUpdatePost={onChangeModal}
                            onChangeDeletePost={onChangeDelete}
                        />
                    ))}
            </div>
            {postData && (
                <ParentSayPost
                    postData={postData}
                    onCreatePost={handleCreatePost}
                    onUpdatePost={handleUpdatePost}
                />
            )}
        </>
    );
}
