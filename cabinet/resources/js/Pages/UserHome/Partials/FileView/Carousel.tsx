import UserCard from "@/Pages/Dashboard/Partials/Post/UserCard";
import { RandomUserForFriendship } from "@/types";


export default function Carousel({
    users,
}: {
    users: RandomUserForFriendship[];
}) {
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}
