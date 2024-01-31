import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Auth,
    FriendsAndFollowers,
    PostType,
    ProfileData,
    RandomUserForFriendship,
    UserFile,
    UserFileFilteredByVisibility,
    postMostViewed,
} from "@/types";
import Friends from "./Partials/Friends";
import PostsList from "../Dashboard/Partials/Post/PostList";
import FileViewList from "./Partials/FileView/FileViewList";
import { useState } from "react";
import AboutFriend from "./Partials/AboutFriend";
import FriendFile from "./Partials/FriendlFile";
import FriendCard from "./Partials/FriendCard";
interface UserPageProps {
    auth: Auth;
    posts: PostType[];
    friendsAndFollowers: FriendsAndFollowers;
    profileData: ProfileData;
    postMostViewed: postMostViewed[];
    randomUsersForFriendship: RandomUserForFriendship[];
    userFile: UserFileFilteredByVisibility;
}
// Припускаємо, що NewPageProps визначено десь в іншому місці
export default function ProfileFriend({
    auth,
    posts,
    friendsAndFollowers,
    profileData,
    userFile,
}: UserPageProps) {
    const [typeFiles, setTypeFiles] = useState("");
    const [showFiles, setShowFiles] = useState<boolean>(false);

    const { isFriend, isFollowing, isFollower } = friendsAndFollowers;
    const handleToggleFiles = (
        shouldShowFiles: boolean,
        shouldTypeFiles: string
    ) => {
        setShowFiles(shouldShowFiles);
        setTypeFiles(shouldTypeFiles);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    New Page Title
                </h2>
            }
        >
            <Head title="New Page" />

            {/* Контент нової сторінки */}
            <main>
                <div className="container ar-px-profile">
                    <div className="grid">
                        <div className="sidebar">
                            <AboutFriend profileData={profileData} />
                            <FriendFile
                                profileData={profileData}
                                onToggleFiles={handleToggleFiles}
                            />
                            <Friends
                                friendsAndFollowers={friendsAndFollowers}
                            />
                        </div>

                        <div className="content">
                            {/*  <!--  --> */}
                            {!showFiles && (
                                <>
                                    <div className="post-item">
                                        <FriendCard
                                            profileData={profileData}
                                            isFriendAndFollow={{
                                                isFriend,
                                                isFollowing,
                                                isFollower,
                                            }}
                                        />
                                    </div>
                                    <PostsList posts={posts} />
                                </>
                            )}
                            {showFiles && (
                                <div className="posts">
                                    <div className="post">
                                        <FileViewList files={userFile} />
                                    </div>{" "}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
