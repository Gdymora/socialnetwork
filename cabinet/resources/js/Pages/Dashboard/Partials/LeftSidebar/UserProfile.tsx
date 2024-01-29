import { FriendsAndFollowers, ProfileData } from "@/types";

export default function UserProfile({
    profileData,
    friendsAndFollowers,
}: {
    profileData: ProfileData;
    friendsAndFollowers: FriendsAndFollowers;
}) {
    return (
        <div className="section_1">
            <div className="header">
                <div className="circle">
                    {/* Ensure that profileData.profileImageUrl is provided */}
                    <img
                        src={
                            profileData.profile_image_url
                                ? `/user-file/${profileData.profile_image_url}`
                                : "assets/images/noimg.png"
                        } 
                        loading="lazy"
                        alt={`${profileData?.name} ${profileData?.last_name}`}
                    />
                </div>
            </div>
            <div className="section centered-container">
                <h2 className="bold">
                    {profileData.name} {profileData.last_name}
                </h2>
                {/* Conditional rendering in case aboutMe or occupations is not provided */}
                {profileData.about_me?.occupations && (
                    <p className="text-light">
                        {profileData.about_me.occupations}
                    </p>
                )}
                <div className="border-block-end"></div>
                <div>
                    <h2 className="text-light">Following</h2>
                </div>
                <div>
                    {/* Conditional rendering in case friendsAndFollowers or followingCount is not provided */}
                    <h2 className="bold">
                        {friendsAndFollowers?.followingCount}
                    </h2>
                </div>
                <div className="border-block-end"></div>
                <div>
                    <h2 className="text-light">Followers</h2>
                </div>
                <div>
                    {/* Conditional rendering in case friendsAndFollowers or followersCount is not provided */}
                    <h2 className="bold">
                        {friendsAndFollowers?.followersCount}
                    </h2>
                </div>
                <div className="border-block-end"></div>
                <div>
                    <a href="">View Profile</a>
                </div>
            </div>
        </div>
    );
}
