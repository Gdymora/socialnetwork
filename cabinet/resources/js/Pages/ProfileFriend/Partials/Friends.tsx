import { FriendsAndFollowers } from "@/types";
import ProfileUserCard from "./ProfileUserCard";

const Friends = ({
    friendsAndFollowers,
}: {
    friendsAndFollowers: FriendsAndFollowers;
}) => {
    const friends = friendsAndFollowers.friends || [];
    const friendsCount = friendsAndFollowers.friendsCount;
    return (
        <div className="frends">
            <div className="flex space-between align-items-center">
                <div className="header">
                    <h2>Friends</h2>
                    <p>{friendsCount}</p>
                </div>
                <div className="right-top">
                    <button className="link-button">View all friends</button>
                </div>
            </div>
            <div className="section">
                {friends.map((friend, index) => (
                    <ProfileUserCard key={index} user={friend} />
                ))}
            </div>
        </div>
    );
};

export default Friends;
