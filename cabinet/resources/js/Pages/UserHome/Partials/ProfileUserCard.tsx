import { Pivot, UserProfile } from "@/types";

type Friend = UserProfile & Pivot;
export default function ProfileUserCard({ user }: { user: Friend }) {
    const { id, name, last_name, profile_image_url } = user;
    const defaultImageUrl = "assets/images/galery/pexels-photo-18784917.webp";

    return (
        <div className="profile-user-card">
            <img
                src={
                    profile_image_url
                        ? `/user-file/${profile_image_url}`
                        : "/assets/images/noimg.png"
                }
                loading="lazy"
                alt={`Аватар ${name}`}
            />
            <a
                href={
                    route("profile-friend", { id: id })
                }
            >
                {" "}
                <p>
                    {name} {last_name}
                </p>{" "}
            </a>
        </div>
    );
}
