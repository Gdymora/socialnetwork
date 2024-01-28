import { FriendsAndFollowers } from "@/types";
import ProfileUserCard from "./ProfileUserCard";

const Friends = ({
    friendsAndFollowers,
}: {
    friendsAndFollowers: FriendsAndFollowers;
}) => {
    const friends = [
        ...friendsAndFollowers.followers,
        ...friendsAndFollowers.following,
    ];
    const friendsCount =
        friendsAndFollowers.followersCount + friendsAndFollowers.followingCount;
    return (
        <div className="frends">
            <div className="flex space-between align-items-center">
                <div className="header">
                    <h2>Friends</h2>
                    <p>{friendsCount}</p>
                </div>
                <div className="right-top">
                    <a href="">View all friends</a>
                </div>
            </div>
            <div className="section">
                {friends.map((friend, index) => (
                    <ProfileUserCard key={index} user={friend} />
                ))}
                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-18843275.webp"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Anna Helton</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-18866330.webp"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Rebeka Gald</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-18731989.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Mary Bly</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-18666051.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Kety Valgyr</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-18570210.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Ango Pedrolo</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-18435667.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Agata Oldrit</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-18038136.webp"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Victoria Lagutova</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-17503411.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Bianca Kuprina</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-11960755.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Olga Volkova</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-11077187.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Jeny Gorenkova</p>{" "}
                    </a>
                </div>

                <div className="profile-user-card">
                    <img
                        src="assets/images/galery/pexels-photo-8908813.jpeg"
                        alt="Фото або відео"
                    />
                    <a href="">
                        {" "}
                        <p>Katrin Malkovich</p>{" "}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Friends;
