import { Author, RandomUserForFriendship } from "@/types";

export default function UserCard({ user }: { user: RandomUserForFriendship }) {
    const { name, last_name, description, profile_image_url } = user;
    const defaultImageUrl = "assets/images/galery/pexels-photo-18784917.webp";

    return (
        <div className="user-card">
            <img src={profile_image_url || defaultImageUrl} alt={`Аватар ${name}`} />
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="add-friend-button">Додати в друзі</button>
        </div>
    );
}
