import { Author, Pivot, RandomUserForFriendship, UserProfile } from "@/types";

type Friend = UserProfile & Pivot;
export default function ProfileUserCard({ user }: { user: Friend }) {
    const { name, last_name, profile_image_url } = user;
    const defaultImageUrl = "assets/images/galery/pexels-photo-18784917.webp";

    return (
        <div className="profile-user-card">
            <img
                src={profile_image_url || defaultImageUrl}
                alt={`Аватар ${name}`}
            />
            <a href="">
                {" "}
                <p>
                    {name} {last_name}
                </p>{" "}
            </a>
        </div>
    );
}
