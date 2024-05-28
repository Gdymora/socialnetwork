import React, { useState, useEffect } from 'react';
import { isFriendAndFollow, ProfileData } from "@/types"; 
import useAxios from '@/Hooks/useAxios';

export default function FriendCard({
    profileData,
    isFriendAndFollow,
}: {
    profileData: ProfileData;
    isFriendAndFollow: isFriendAndFollow;
}) {
    const { id, name, last_name, profile_image_url } = profileData;
    const { isFriend } = isFriendAndFollow;
    const [isFriendStatus, setIsFriendStatus] = useState(isFriend);
    const { sendRequest, data, loading, error } = useAxios(''); // Використовуйте хук тут

    const handleAddFriend = () => {
        sendRequest('patch', {}, { url: `/friends/${id}/follow` });
        setIsFriendStatus(true);
        // Ваша логіка після успішного запиту
    };

    const handleDeleteFriend = () => {
        sendRequest('patch', {}, { url: `/friends/${id}/unfollow` });
        setIsFriendStatus(false);
        // Ваша логіка після успішного запиту
    };

    return (
        <div className="user-galery-card">
            <a href={
                // @ts-expect-error
                route("profile-friend", { id: id })
                }>
                <img
                    src={
                        profile_image_url
                            ? `/user-file/${profile_image_url}`
                            : "/assets/images/noimg.png"
                    }
                    alt={`Аватар ${name}`}
                />
                <div className="user-card-content">
                    <a href="">
                        {name} {last_name}
                    </a>
                    <p>{profileData.about_me?.hobbies}</p>
                </div>
            </a>
            <div className="user-card-footer">
                {!isFriendStatus ? (
                    <button className="like-button" onClick={handleAddFriend}>Add to friends</button>
                ) : (
                    <button className="comment-button" onClick={handleDeleteFriend}>Delete</button>
                )}
            </div>
        </div>
    );
}
