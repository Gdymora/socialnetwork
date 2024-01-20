export default function UserProfile({ profileData, friendsAndFollowers }) {
    return (
        <div className="section_1">
            <div className="header">
                <div className="circle">
                    {/* Ensure that profileData.profileImageUrl is provided */}
                    <img
                        src={
                            profileData.profileImageUrl ||
                            "assets/images/noimg.png"
                        }
                        alt={`${profileData?.name} ${profileData?.lastName}`}
                    />
                </div>
            </div>
            <div className="section centered-container">
                <h2 className="bold">
                    {profileData.name} {profileData.lastName}
                </h2>
                {/* Conditional rendering in case aboutMe or occupations is not provided */}
                {profileData.aboutMe?.occupations && (
                    <p className="text-light">
                        {profileData.aboutMe.occupations}
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
