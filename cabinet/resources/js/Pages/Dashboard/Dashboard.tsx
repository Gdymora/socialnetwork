import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import { useDispatch, useSelector } from "react-redux";
import {
    Auth,
    ProfileData,
    FriendsAndFollowers,
    PostType,
    RandomUserForFriendship,
    postMostViewed,
    UserProfile as UserProfileInterface,
} from "@/types";
import { SuggestionsList } from "./Partials/LeftSidebar/SuggestionsList";
import UserProfile from "./Partials/LeftSidebar/UserProfile";
import PostsList from "./Partials/Post/PostList";
import RightSidebar from "./Partials/RightSidebar/RightSidebar";
import ParentSayPost from "./Partials/ModalSay/ParentSayPost";
import { useEffect } from "react";
import { createAction } from "@reduxjs/toolkit";
import { setUser } from "@/store/slices/userSlice";

interface DashboardProps {
    auth: Auth;
    posts: PostType[];
    friendsAndFollowers: FriendsAndFollowers;
    profileData: ProfileData;
    postMostViewed: postMostViewed[];
    randomUsersForFriendship: RandomUserForFriendship[];
}
export default function Dashboard({
    auth,
    posts,
    friendsAndFollowers,
    profileData,
    postMostViewed,
    randomUsersForFriendship,
}: DashboardProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        const user: UserProfileInterface = auth.user;
        // Збереження даних про користувача в Redux store
        if (user && dispatch) {
            dispatch(setUser(user));
        }
    }, [auth, dispatch]);

    const user = useSelector((state: any) => state.user);

    // Лог отриманих даних
    console.log("User from Redux store:", user);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
            posts={posts}
            friendsAndFollowers={friendsAndFollowers}
            profileData={profileData}
            postMostViewed={postMostViewed}
            randomUsersForFriendship={randomUsersForFriendship}
        >
            <Head title="Dashboard" />
            <main>
                <div className="container ar-px">
                    <div className="gridcol">
                        <div className="left-sidebar">
                            <div className="section_1">
                                <UserProfile
                                    profileData={profileData}
                                    friendsAndFollowers={friendsAndFollowers}
                                />
                            </div>
                            <div className="section_2">
                                <SuggestionsList
                                    randomUsersForFriendship={
                                        randomUsersForFriendship
                                    }
                                />
                            </div>
                        </div>

                        <div className="content">
                            <ParentSayPost profileData={profileData} />
                            <PostsList posts={posts} />
                        </div>

                        <div className="right-sidebar">
                            <RightSidebar postMostViewed={postMostViewed} />
                        </div>
                    </div>
                    {/* Інші компоненти, які використовують ці дані */}

                    <div className="container ar-px">
                        <div className="gridcol">
                            <div className="fixed-bottom-right">
                                <div className="note-count">
                                    <div className="circle">
                                        <img
                                            src="assets/images/galery/pexels-photo-18731989.jpeg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="notification-badge">3</div>
                                </div>
                                <div className="note-count">
                                    <div className="circle">
                                        <img
                                            src="assets/images/galery/pexels-photo-8908813.jpeg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="notification-badge">3</div>
                                </div>
                                <div className="note-count">
                                    <div className="circle">
                                        <img
                                            src="assets/images/galery/pexels-photo-11960755.jpeg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="notification-badge">3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
