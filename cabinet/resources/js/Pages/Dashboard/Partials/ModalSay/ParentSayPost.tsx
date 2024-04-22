import { useEffect, useState } from "react";
import SayPost from "./SayPost";
import Modal from "@/Components/Modal";
import { LinkData, PostType, ProfileData } from "@/types";
import JobTabContent from "./JobTabContent";
import styles from "./TabContent.module.css";
import Button from "@/Components/Button";
import stylesModal from "./Modal.module.css";
import SelectButton from "@/Components/SelectButton";
import FileTabContent from "./FileTabContent";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import LinkTabContent from "./LinkTabContent";
import { toast } from "react-toastify";
import EditableText from "@/Components/EditableText";

export default function ParentSayPost({
    profileData,
    postData,
}: {
    profileData?: ProfileData;
    postData?: PostType;
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
    const [linkData, setLinkData] = useState<LinkData | string>("");
    const [disabled, setDisabled] = useState(true);
    const [filePreview, setFilePreview] = useState<{
        url: string;
        type: string;
    } | null>(null);

    useEffect(() => {
        if (postData) {
            setIsModalOpen(true);
            setSelectedOption(postData.visibility === "public" ? "1" : "2");
            handleTextChange(postData.content);
            if (postData.links.length > 0) {
                handleOpenModal("link");
                handleLinkChange(postData.links[0]);
            }
            if (postData.media.length > 0) {
                handleOpenModal("file");
                setFilePreview({
                    url: postData.media[0].url,
                    type: postData.media[0].type,
                });
            }
        }
        return () => {
            setIsModalOpen(false);
            setSelectedOption("");
        };
    }, [postData]);

    const fileClick = () => handleOpenModal("file");
    const jobClick = () => handleOpenModal("job");
    const linkClick = () => handleOpenModal("link");

    const handleOpenModal = (content: string) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Колбеки для оновлення стану
    const handleSelectChange = (value: string | number) => {
        setSelectedOption(value);
    };

    const handleFileChange = (data: File | null) => {
        if (data && !data.type.startsWith("audio/")) {
            setDisabled(false);
            setFileData(data);
            setTextData(data.name);
        } else {
            setTextData("");
        }
    };

    const handleLinkChange = (data: LinkData) => {
        setDisabled(false);
        setLinkData(data);
        setTextData(data.title);
    };

    const handleTextChange = (data: string) => {
        setDisabled(false);
        setTextData(data);
    };

    const formData = new FormData();
    formData.append("textData", textData);
    formData.append("linkData", JSON.stringify(linkData));
    formData.append("selectedOption", selectedOption as string);

    if (fileData) {
        formData.append("fileData", fileData);
    }

    const handleSubmit = () => {
        axios
            .post(route("posts"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                toast.success(res.data.message);
                setDisabled(true);
            })
            .catch((error) => {
                toast.error("Error submitting post data", error);
                console.error("Error submitting post data", error);
            });
    };

    return (
        <>
            {profileData && (
                <SayPost
                    profileData={profileData}
                    onTextClick={() => handleOpenModal("text")}
                    onFileClick={() => handleOpenModal("file")}
                    onLinkClick={() => handleOpenModal("link")}
                    onJobClick={() => handleOpenModal("job")}
                />
            )}
            {isModalOpen && (
                <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="relative bg-white rounded-lg shadow-xl">
                        <div className={stylesModal.modalHeader}>
                            <span>Create post</span>
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
                                    <div> </div>
                                    <div className={stylesModal.textFlexCenter}>
                                        <p className="bold"></p>
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
                                            selectedSet={selectedOption}
                                        />
                                    </div>
                                </div>

                                {
                                    <EditableText
                                        onChange={handleTextChange}
                                        textFromUploader={textData}
                                    />
                                }

                                {modalContent === "file" && (
                                    <FileTabContent
                                        className={
                                            modalContent === "file"
                                                ? styles.imageTabContentActive
                                                : styles.imageTabContent
                                        }
                                        onChange={handleFileChange}
                                        page={"dashboard"}
                                        prewiewForUpdate={filePreview}
                                    />
                                )}
                                {modalContent === "link" && (
                                    <LinkTabContent
                                        className={
                                            modalContent === "link"
                                                ? styles.linkTabContentActive
                                                : styles.linkTabContent
                                        }
                                        onChange={handleLinkChange}
                                        dataLink={postData?.links[0]}
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

                        {profileData && (
                            <div className={stylesModal.modalFooter}>
                                <div className="flex align-items-center post_message space-between">
                                    <Button
                                        className="btn btn-secondary"
                                        onClick={linkClick}
                                    >
                                        Link
                                    </Button>
                                    <Button
                                        className="but btn btn-secondary"
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
                        )}

                        <div className={stylesModal.modalFooter}>
                            <Button
                                className="btn btn-primary-send"
                                onClick={handleSubmit}
                                disabled={disabled}
                            >
                                Send
                            </Button>{" "}
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
