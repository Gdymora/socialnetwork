import { useEffect, useState } from "react";
import SayPost from "./SayPost";
import Modal from "@/Components/Modal";
import { ProfileData } from "@/types";
import JobTabContent from "./JobTabContent";
import styles from "./TabContent.module.css";
import Button from "@/Components/Button";
import stylesModal from "./Modal.module.css"; // Імпортуйте ваш CSS модуль
import EditableText from "./EditableText";
import SelectButton from "@/Components/SelectButton";
import FileTabContent from "./FileTabContent";
import { useForm } from "@inertiajs/react";
import axios from "axios";

export default function ParentSayPost({
    profileData,
}: {
    profileData: ProfileData;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        textData: "",
        selectedOption: "",
        fileData: null,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("text");

    const [selectedOption, setSelectedOption] = useState<string | number>("");

    const [fileData, setFileData] = useState<File | null>(null);
    const [textData, setTextData] = useState("");

    useEffect(() => {
        console.log(isModalOpen);
    });

    const fileClick = () => handleOpenModal("file");
    const jobClick = () => handleOpenModal("job");
    const handleOpenModal = (content: string) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Колбеки для оновлення стану
    const handleSelectChange = (value: string | number) => {
        setSelectedOption(value);
    };

    const handleFileChange = (data: File | null) => {
        setFileData(data);
    };

    const handleTextChange = (data: string) => {
        setTextData(data);
    };

    const formData = new FormData();
    formData.append("textData", textData);
    formData.append("selectedOption", selectedOption as string);

    if (fileData) {
        formData.append("fileData", fileData);
         console.log(formData); 
    }

    const handleSubmit = () => {
        // Обробка даних форми
        console.log("Відправлення форми з даними:", {
            textData,
            selectedOption,
            fileData,
            formData,
        });
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        axios
            .post(route("posts"), formData, {
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
        /*  post(route('posts', {
           // preserveScroll: true,
            onSuccess: (responce) => console.log(responce),
          })); */
        // Відправка даних на сервер та інші дії
    };
    return (
        <>
            <SayPost
                profileData={profileData}
                onTextClick={() => handleOpenModal("text")}
                onFileClick={() => handleOpenModal("file")}
                onJobClick={() => handleOpenModal("job")}
            />
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
                                                profileData.profile_image_url ||
                                                "assets/images/noimg.png"
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
                                {<EditableText onChange={handleTextChange} />}

                                {modalContent === "file" && (
                                    <FileTabContent
                                        className={
                                            modalContent === "file"
                                                ? styles.imageTabContentActive
                                                : styles.imageTabContent
                                        }
                                        onChange={handleFileChange}
                                    />
                                )}
                                {modalContent === "job" && (
                                    <JobTabContent
                                        className={
                                            modalContent === "job"
                                                ? styles.jobTabContentActive
                                                : styles.jobTabContent
                                        }
                                    />
                                )}
                            </div>
                        </div>
                        <div className={stylesModal.modalFooter}>
                            <div className="flex align-items-center post_message">
                                <Button
                                    className="but btn btn-danger"
                                    onClick={fileClick}
                                >
                                    Image/Video
                                </Button>
                                <Button
                                    className="btn btn-secondary"
                                    onClick={jobClick}
                                >
                                    Job
                                </Button>
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
