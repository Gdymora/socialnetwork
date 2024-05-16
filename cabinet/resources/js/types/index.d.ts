export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

interface User extends UserProfile { }
export interface Auth {
    user: User;
}

export interface Followers extends UserProfile, Pivot { }
export interface Following extends UserProfile, Pivot { }
export interface UserProfile {
    birthdate: string | null;
    created_at: string;
    email: string;
    email_verified_at: string;
    gender: string | null;
    id: number | null;
    last_name: string | null;
    name: string | null;
    profile_image_url: string | null;
    role: 'user' | 'admin' | 'moderator';
    status: 'activated' | 'blocked'
    updated_at: string | null;
}
export interface Pivot {
    user_id: number;
    friend_id: number;
}

export interface postMostViewed extends PostType {
}

export interface isFriendAndFollow {
    isFriend: boolean;
    isFollowing: boolean;
    isFollower: boolean;
}
export interface FriendsAndFollowers extends isFriendAndFollow {
    followers: Followers[];
    following: Following[];
    friends: Following[];
    friendsCount: number;
    followersCount: number;
    followingCount: number;
}

export interface Media {
    created_at: string;
    id: number;
    mediable_id: number;
    mediable_type: string;
    type: "image" | "video" | "music";
    updated_at: string;
    url: string;
    title?: string;
    description?: string;
}

export interface LinkData {
    site_name: string;
    title: string;
    description: string;
    image: string;
    url: string;
}

export interface UserFile extends UserFileFilteredByVisibility{
    created_at: string;
    description: string; 
    id: number;
    title: string;
    type: string;
    updated_at: string;
    url: string;
    userfilable_id: number;
    userfilable_type: string;
    visible: 'public' | 'private';
}

export interface UserFileFilteredByVisibility {
    public: UserFile[] | [];
    private: UserFile[] | [];
    friends: UserFile[] | [];
}
export interface PostType {
    id: number;
    title: string;
    content: string;
    media: Media[];
    links: LinkData[];
    created_at: string;
    updated_at: string;
    author: Author;
    comments: [Comments]
    author_id: number;
    likes: number;
    share: number;
    visibility: 'public' | 'private'; // або інші можливі значення, якщо є
    status: 'active' | 'inactive'; // додайте інші можливі статуси, якщо потрібно
    user_access: null | string; // припускаю, що це може бути строкою або null
    viewed: number;
}
export interface Author {
    id: number;
    last_name: string | null;
    name: string | null;
    profile_image_url: string | null;
}

export interface Comments {
    author_comments: Author;
    content: string | null;
    created_at: string | null;
    id: number;
    parent_comment_id: number;
    post_id: number;
    updated_at: string | null;
    user_id: number;
    childComments: null | Comments[];
}
export interface AboutMe {
    birthplace: string | null;
    created_at: string | null;
    education: string | null;
    hobbies: string | null;
    id: number;
    occupations: string | null;
    updated_at: string | null;
    user_id: number;
}
export interface ProfileData extends Author {
    about_me: AboutMe;
}
export interface RandomUserForFriendship extends Author {
    about_me: AboutMe;
}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type OnChangeFunction = (file: File | null) => void;
