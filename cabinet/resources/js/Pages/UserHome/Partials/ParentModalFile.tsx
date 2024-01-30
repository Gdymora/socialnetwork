import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import { ProfileData } from "@/types";
import styles from "./ModalAddFile/TabContent.module.css";
import Button from "@/Components/Button";
import stylesModal from "./ModalAddFile/Modal.module.css";
import SelectButton from "@/Components/SelectButton";
import FileTabContent from "./ModalAddFile/FileTabContent";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import Videos from "./Videos";
import TextInput from "@/Components/TextInput";
import Music from "./Music";
import Fotos from "./Fotos";
import Posts from "./Posts";

export default function ParentModalFile({
    profileData,
    onToggleFiles,
}: {
    profileData: ProfileData;
    onToggleFiles: (shouldShowFiles: boolean, typeFiles: string) => void;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        titleData: "",
        descriptionData: "",
        selectedOption: "",
        fileData: null,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | number>("");
    const [fileData, setFileData] = useState<File | null>(null);

    useEffect(() => {});

    const handleOpenModal = (content: string) => {
        setIsModalOpen(true);
    };

    // Колбеки для оновлення стану
    const handleSelectChange = (value: string | number) => {
        setSelectedOption(value);
    };

    const handleFileChange = (data: File | null) => {
        setFileData(data);
    };

    const formData = new FormData();
    formData.append("selectedOption", selectedOption as string);
    formData.append("titleData", data.titleData);
    formData.append("descriptionData", data.descriptionData);
    if (fileData) {
        formData.append("fileData", fileData);
    }

    const handleSubmit = () => {
        // Обробка даних форми
        console.log("Відправлення форми з даними:", {
            data,
            selectedOption,
            fileData,
            formData,
        });
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        axios
            .post(route("user-file"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error("Error submitting post data", error);
            });
    };

    return (
        <>
            <Fotos
                onAddFotos={() => handleOpenModal("foto")}
                handleShowFotos={() => onToggleFiles(true, "foto")}
            />
            <Music
                onAddMusics={() => handleOpenModal("music")}
                handleShowMusics={() => onToggleFiles(true, "music")}
            />
            <Videos
                onAddVideos={() => handleOpenModal("video")}
                handleShowVideos={() => onToggleFiles(true, "video")}
            />
            <Posts handleShowPosts={() => onToggleFiles(false, "post")} />

            {isModalOpen && (
                <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="relative bg-white rounded-lg shadow-xl">
                        <div className={stylesModal.modalHeader}>
                            <span>Modal Header</span>
                            <div
                                className={stylesModal.modalCloseButton}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                                </svg>
                            </div>
                        </div>
                        <div className="overflow-y-auto max-h-[80vh]">
                            <div className={stylesModal.modalContent}>
                                <div className={stylesModal.gridBlock}>
                                    <div
                                        className={`circle ${stylesModal.sizeCircle}`}
                                    >
                                        <img
                                            src={
                                                profileData.profile_image_url
                                                    ? `/user-file/${profileData.profile_image_url}`
                                                    : "/assets/images/noimg.png"
                                            }
                                            alt={profileData.name || "noimage"}
                                        />
                                    </div>
                                    <div className={stylesModal.textFlexCenter}>
                                        <p className="bold">
                                            {profileData.name}{" "}
                                            {profileData.last_name}
                                        </p>
                                    </div>
                                    <div className={stylesModal.textFlexCenter}>
                                        <SelectButton
                                            size="small"
                                            style={{
                                                backgroundColor: "lightblue",
                                            }}
                                            options={[
                                                { label: "Public", value: "1" },
                                                {
                                                    label: "Private",
                                                    value: "2",
                                                },
                                            ]}
                                            onChange={handleSelectChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="title">Title:</label>
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.titleData}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("titleData", e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description">
                                        Description:
                                    </label>
                                    <TextInput
                                        id="description"
                                        type="description"
                                        name="description"
                                        value={data.descriptionData}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "descriptionData",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <FileTabContent
                                    className={
                                        true
                                            ? styles.imageTabContentActive
                                            : styles.imageTabContent
                                    }
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <div className={stylesModal.modalFooter}>
                            <Button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Відправити
                            </Button>{" "}
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
