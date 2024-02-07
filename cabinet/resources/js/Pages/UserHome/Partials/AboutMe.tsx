import EditableText from "@/Components/EditableText";
import useAxios from "@/Hooks/useAxios";
import { ProfileData } from "@/types";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

export default function ({ profileData }: { profileData: ProfileData }) {
    const [aboutMe, setAboutMe] = useState(profileData);
    const [textData, setTextData] = useState("");
    const { sendRequest, data, loading, error } = useAxios(""); // Використовуйте хук тут

    const label = {
        hobbies: "hobby",
        occupations: "occupations",
        education: "education",
        birthplace: "Birthplace",
    };
    // Функція для отримання ключа за значенням
    const getKeyByValue = (
        object: Record<string, string>,
        value: string
    ): string | undefined => {
        return Object.keys(object).find((key) => object[key] === value);
    };
    if (!profileData || !profileData.about_me) {
        // Відображення заглушки
        //TODO add sceleton
        //return <div>Loading...</div>;
    }

    const handleTextChange = (data: string) => {
        setTextData(data);
    };
    const [editableText, setEditableText] = useState(true);

    const handleEditableText = () => {
        setEditableText(false);
    };

    const editableStyle = {
        margin: "-8px",
    };
    const handleInputBlur = (valueToFind: string) => {
        const keyValue = getKeyByValue(label, valueToFind);
        if (keyValue && textData) {
            sendRequest(
                "patch",
                { [keyValue]: textData },
                { url: `/user-about-me` }
            ); 
        }
        // логіка після успішного запиту
    };
    useEffect(() => {
        if (!loading && !error && data) {
            // Логіка після успішного запиту             
            toast.success(data.message);
        } else if (!loading && error) {
            // Логіка у випадку помилки
            console.error("Сталася помилка при оновленні даних:", error);
            toast.error("Сталася помилка при оновленні даних");
        }
    }, [data, loading, error]);
    return (
        <div className="about">
            <h2>About me</h2>
            <label htmlFor="section"> {label.occupations}: </label>
            <div
                onClick={handleEditableText}
                className="section"
                onBlur={() => handleInputBlur(label.occupations)}
            >
                {editableText ? (
                    <>
                        {profileData.about_me?.occupations ? (
                            <p className="text-light">
                                {profileData.about_me.occupations}
                            </p>
                        ) : (
                            <p>Add a {label.occupations}</p>
                        )}
                    </>
                ) : (
                    <div style={editableStyle}>
                        <EditableText
                            onChange={handleTextChange}
                            textFromUploader={textData}
                            isEdit={true}
                            isTypeInput={true}
                        />
                    </div>
                )}
            </div>

            <label htmlFor="section"> {label.hobbies}: </label>
            <div className="section">
                {profileData.about_me?.hobbies ? (
                    <p className="text-light">{profileData.about_me.hobbies}</p>
                ) : (
                    <p>Add a {label.hobbies}</p>
                )}
            </div>
            <label htmlFor="section"> {label.education}: </label>
            <div className="section">
                {profileData.about_me?.education ? (
                    <p className="text-light">
                        {profileData.about_me.education}
                    </p>
                ) : (
                    <p>Edit your {label.education}</p>
                )}
            </div>
            <label htmlFor="section"> {label.birthplace}: </label>
            <div className="section">
                {profileData.about_me?.birthplace ? (
                    <p className="text-light">
                        {profileData.about_me.birthplace}
                    </p>
                ) : (
                    <p>Add to {label.birthplace}</p>
                )}
            </div>
        </div>
    );
}
