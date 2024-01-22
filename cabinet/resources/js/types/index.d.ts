export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

interface User extends UserProfile {
    followers: Following[];
    following: Following[];
}
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
    id: number;
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
export interface FriendsAndFollowers extends Followers, Following {
    followersCount: number | null;
    followingCount: number | null;
}

export interface PostType {
    id: number;
    title: string;
    content: string;
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
    aboutMe: AboutMe;
}
export interface RandomUserForFriendship extends Author {
    aboutMe: AboutMe;
}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
