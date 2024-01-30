import { ProfileData } from "@/types";
import { useEffect, useState } from "react";

export default function AboutFriend({ profileData }: { profileData: ProfileData }) {
    const [aboutMe, setAboutMe] = useState(profileData);

    const libel = {
        hobbies: "hobby",
        occupations: "occupations",
        education: "education",
        birthplace: "Birthplace",
    };
    if (!profileData || !profileData.about_me) {
        // Відображення заглушки
        //TODO add sceleton
        return <div>Loading...</div>;
    }
    useEffect(() => { 
    }, [profileData.about_me]);

    return (
        <div className="about">
            <h2>About me</h2>
            <label htmlFor="section"> {libel.occupations}: </label>
            <div className="section">
                {profileData.about_me?.occupations ? (
                    <p className="text-light">
                        {profileData.about_me.occupations}
                    </p>
                ) : (
                    <p>Add a {libel.occupations}</p>
                )}
            </div>
            <label htmlFor="section"> {libel.hobbies}: </label>
            <div className="section">
                {profileData.about_me?.hobbies ? (
                    <p className="text-light">{profileData.about_me.hobbies}</p>
                ) : (
                    <p>Add a {libel.hobbies}</p>
                )}
            </div>
            <label htmlFor="section"> {libel.education}: </label>
            <div className="section">
                {profileData.about_me?.education ? (
                    <p className="text-light">
                        {profileData.about_me.education}
                    </p>
                ) : (
                    <p>Edit your {libel.education}</p>
                )}
            </div>
            <label htmlFor="section"> {libel.birthplace}: </label>
            <div className="section">
                {profileData.about_me?.birthplace ? (
                    <p className="text-light">
                        {profileData.about_me.birthplace}
                    </p>
                ) : (
                    <p>Add to {libel.birthplace}</p>
                )}
            </div>
        </div>
    );
}
