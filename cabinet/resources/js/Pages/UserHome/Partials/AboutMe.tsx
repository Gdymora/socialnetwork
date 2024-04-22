import EditableText from "@/Components/EditableText";
import useAxios from "@/Hooks/useAxios";
import { AboutMe, ProfileData } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ({ profileData }: { profileData: ProfileData }) {
    const [textData, setTextData] = useState<AboutMe>(profileData.about_me); // Зберігати textData для кожного ключа
    const { sendRequest, data, loading, error } = useAxios("");
    const [editableText, setEditableText] = useState<{
        [key: string]: boolean;
    }>({
        hobbies: false,
        occupations: false,
        education: false,
        birthplace: false,
    });

    const label = {
        hobbies: "Hobby",
        occupations: "Occupations",
        education: "Education",
        birthplace: "Birthplace",
    };

    const getKeyByValue = (
        object: Record<string, string>,
        value: string
    ): string | undefined => {
        return Object.keys(object).find((obj) => obj === value);
    };

    const handleTextChange = (data: string, key: string) => {
        // Приймає ключ, до якого змінюється значення
        setTextData((prevTextData) => ({
            ...prevTextData,
            [key]: data, // Зберігає textData для цього ключа
        }));
    };

    const handleEditableText = (key: string, isText: boolean) => {
        setEditableText((prevState) => ({
            ...prevState,
            [key]: isText,
        }));
    };

    const editableStyle = {
        margin: "-8px",
    };

    const handleInputBlur = (valueToFind: string) => {
        const keyValue = getKeyByValue(label, valueToFind);
        if (keyValue) {
            if (
                profileData.about_me[keyValue as keyof AboutMe] !==
                textData[keyValue as keyof AboutMe]
            ) {
                sendRequest(
                    "patch",
                    { [keyValue]: textData[keyValue as keyof AboutMe] },
                    { url: `/user-about-me` }
                );
            }
            handleEditableText(valueToFind, false);
        }
    };

    useEffect(() => {
        if (!loading && !error && data) {
            // @ts-ignore
            if (data.message) {
                // @ts-ignore
                toast.success(data.message);
            } else {
                toast.success("Successful!");
            }
        } else if (!loading && error) {
            toast.error("Сталася помилка при оновленні даних");
        }
    }, [data, loading, error]);

    return (
        <div className="about">
            <div className="flex justify-content-center">
                <div
                    className="circle"
                    style={{ width: "200px", height: "200px" }}
                >
                    <img
                        src={
                            profileData.profile_image_url
                                ? `/user-file/${profileData.profile_image_url}`
                                : "/assets/images/noimg.png"
                        }
                        loading="lazy"
                        alt={`${profileData?.name} ${profileData?.last_name}`}
                    />
                </div>
            </div>
            <div className="flex justify-content-center">
                <h2>About me</h2>
            </div>
            {Object.entries(label).map(([key, value]) => (
                <div key={key}>
                    <label htmlFor="section">{value}: </label>
                    <div
                        key={key}
                        onClick={() => handleEditableText(key, true)}
                        className="section"
                        onBlur={() => handleInputBlur(key)}
                    >
                        {editableText[key] ? (
                            <div style={editableStyle}>
                                <EditableText
                                    onChange={(data) =>
                                        handleTextChange(data, key)
                                    }
                                    textFromUploader={
                                        textData[key as keyof AboutMe] as string
                                    }
                                    isEdit={editableText[key]}
                                    isTypeInput={false}
                                />
                            </div>
                        ) : (
                            <>
                                {textData[key as keyof AboutMe] ? (
                                    <p className="text-light">
                                        {textData[key as keyof AboutMe]}
                                    </p>
                                ) : (
                                    <p>Add a {value}</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
