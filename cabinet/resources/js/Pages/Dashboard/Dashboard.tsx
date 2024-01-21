import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Auth,
    ProfileData,
    FriendsAndFollowers,
    PageProps,
    PostType,
    RandomUserForFriendship,
    postMostViewed,
} from "@/types";
import { SuggestionsList } from "./Partials/LeftSidebar/SuggestionsList";
import UserProfile from "./Partials/LeftSidebar/UserProfile";
import PostsList from "./Partials/Post/PostList";
import SayPost from "./Partials/Post/SayPost";
import RightSidebar from "./Partials/RightSidebar/RightSidebar";
// Dashboard.tsx
// інші необхідні імпорти
interface DashboardProps {
    auth: Auth;
    posts: PostType[];
    friendsAndFollowers: FriendsAndFollowers;
    profileData: ProfileData;
    postMostViewed: postMostViewed;
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
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            {/* Тут можна використовувати передані дані */}
            <main>
                <div className="container ar-px">
                    <div className="grid">
                        
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
                            <SayPost profileData={profileData} />
                            <PostsList posts={posts} />
                        </div>

                        <div className="right-sidebar">
                            <RightSidebar />
                        </div>
                    </div>
                    {/* Інші компоненти, які використовують ці дані */}

                    <div className="container ar-px">
                        <div className="grid">
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
