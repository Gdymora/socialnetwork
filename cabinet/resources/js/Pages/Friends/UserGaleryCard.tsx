import { ProfileData } from "@/types";
import { useState } from "react";
import useAxios from "@/Hooks/useAxios";
import { useExpandableContent } from "@/Hooks/useExpandableContent";

export default function UserGaleryCard({
    profileData,
}: {
    profileData: ProfileData;
}) {
    const { id, name, last_name, profile_image_url } = profileData;
    const [isFriendStatus, setIsFriendStatus] = useState(false);
    const { sendRequest, data, loading, error } = useAxios(""); // Використовуйте хук тут

    const handleAddFriend = () => {
        sendRequest("patch", {}, { url: `/friends/${id}/follow` });
        setIsFriendStatus(true);
        // логіка після успішного запиту
    };

    const handleDeleteFriend = () => {
        sendRequest("patch", {}, { url: `/friends/${id}/unfollow` });
        setIsFriendStatus(false);
        // логіка після успішного запиту
    };
    const maxLength = 16; // Встановіть максимальну довжину тексту
    const text = profileData.about_me?.hobbies
        ? profileData.about_me?.hobbies
        : "";
    const { isExpanded, toggleExpanded, renderContent } = useExpandableContent(
        text,
        maxLength
    );
    const nameUser = `${profileData.name} ${profileData.last_name}`;
    const {
        isExpanded: isExpandedName,
        toggleExpanded: toggleExpandedName,
        renderContent: renderContentName,
    } = useExpandableContent(nameUser, maxLength);

    return (
        <div className="user-galery-card">
            <a
                href={ 
                    route("profile-friend", { id: id })
                }
            >
                <img
                    src={
                        profile_image_url
                            ? `/user-file/${profile_image_url}`
                            : "/assets/images/noimg.png"
                    }
                    alt={`Аватар ${name}`}
                />
                <div className="user-card-content">
                    <button className="link-button">
                        {renderContentName()}
                        {text.length > maxLength && (
                            <button
                                style={{ border: "1px solid #ddd" }}
                                onClick={toggleExpandedName}
                            >
                                {isExpandedName ? " <-" : "..."}
                            </button>
                        )}
                    </button>

                    <p>
                        {renderContent()}
                        {text.length > maxLength && (
                            <button
                                style={{ border: "1px solid #ddd" }}
                                onClick={toggleExpanded}
                            >
                                {isExpanded ? " <-" : "..."}
                            </button>
                        )}
                    </p>
                </div>
            </a>
            <div className="user-card-footer">
                {!isFriendStatus ? (
                    <button className="like-button" onClick={handleAddFriend}>
                        Add to friends
                    </button>
                ) : (
                    <button
                        className="comment-button"
                        onClick={handleDeleteFriend}
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}
