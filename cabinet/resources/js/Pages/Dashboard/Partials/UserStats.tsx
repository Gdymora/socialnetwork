export function UserStats({ profileData }) {
    return (
        <div className="section_1">
            <div className="header">
                <div className="circle">
                    <img src={profileData.profileImageUrl} alt="" />
                </div>
            </div>
            <div className="section centered-container">
                <h2 className="bold">
                    {profileData.name} {profileData.lastName}
                </h2>
                <p className="text-light">{profileData.aboutMe.occupations}</p>
                {/* інші елементи */}
            </div>
        </div>
    );
}
