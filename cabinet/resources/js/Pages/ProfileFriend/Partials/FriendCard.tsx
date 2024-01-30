import { ProfileData } from "@/types";

export default function FriendCard({
    profileData,
}: {
    profileData: ProfileData;
}) {
    const { id, name, last_name, profile_image_url } = profileData;

    return (
        <div className="user-galery-card">
            <a href={route("profile-friend", { id: id })}>
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
                        {" "}
                        {name} {last_name}{" "}
                    </a>
                    <p>{profileData.about_me.hobbies}</p>
                </div>
            </a>
            <div className="user-card-footer">
                <button className="like-button">Add to friends</button>
                <button className="comment-button">Delete</button>
            </div>
        </div>
    );
}
