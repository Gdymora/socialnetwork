import { Pivot, UserProfile } from "@/types";

type Friend = UserProfile & Pivot;
export default function ProfileUserCard({ user }: { user: Friend }) {
    const { id, name, last_name, profile_image_url } = user;

    return (
        <div className="profile-user-card">
            <img
                src={
                    profile_image_url
                        ? `/user-file/${profile_image_url}`
                        : "/assets/images/noimg.png"
                }
                alt={`Аватар ${name}`}
            />
            <a
                href={
                    // @ts-expect-error
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
