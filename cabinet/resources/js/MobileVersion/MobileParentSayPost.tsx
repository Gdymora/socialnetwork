// MobileParentSayPost.tsx
import { useEffect, useState } from "react";
import { ProfileData, PostType, LinkData } from "@/types";
import Button from "@/Components/Button";
import EditableText from "@/Components/EditableText";
import SelectButton from "@/Components/SelectButton";
import { toast } from "react-toastify";
import useAxios from "@/Hooks/useAxios";
import FileTabContent from "@/Pages/Dashboard/Partials/ModalSay/FileTabContent";
import LinkTabContent from "@/Pages/Dashboard/Partials/ModalSay/LinkTabContent";
import styles from "./TabContent.module.css";

interface MobileParentSayPostProps {
    profileData?: ProfileData;
    onCreatePost?: (postData: PostType) => void;
    onClose?: () => void;
}

export default function MobileParentSayPost({
    profileData,
    onCreatePost,
    onClose,
}: MobileParentSayPostProps) {
    const {
        data: postCreate,
        error: errorCreate,
        sendRequest: sendRequestCreate,
    } = useAxios();

    const [modalContent, setModalContent] = useState("text");
    const [selectedOption, setSelectedOption] = useState<string | number>("1"); // За замовчуванням public
    const [fileData, setFileData] = useState<FileList | null>(null);
    const [textData, setTextData] = useState("");
    const [linkData, setLinkData] = useState<LinkData | string>("");
    const [disabled, setDisabled] = useState(true);

    const handleSelectChange = (value: string | number) => {
        setSelectedOption(value);
    };

    const handleFileChange = (data: FileList | null) => {
        if (data) {
            setDisabled(false);
            setFileData(data);
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
    const onHandleClose = () => {
        if (onClose) {
            onClose();
        }
    };
    const handleSubmitCreate = () => {
        const formData = new FormData();
        formData.append("textData", textData);
        formData.append("linkData", JSON.stringify(linkData));
        formData.append("selectedOption", selectedOption as string);

        if (fileData) {
            Array.from(fileData).forEach((file, index) => {
                formData.append(`fileData${index}`, file);
            });
        }

        sendRequestCreate("post", formData, {
            url: `/posts`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    useEffect(() => {
        if (postCreate && onCreatePost) {
            const postObj: PostType = postCreate["post"];
            onCreatePost(postObj);
            toast.success(`Success create Post`);
        }
    }, [postCreate]);

    return (
        <div className="mobile-create-post">
            <div className="mobile-modal-header">
                <span>Create post</span>

                <SelectButton
                    size="small"
                    options={[
                        { label: "Public", value: "1" },
                        { label: "Private", value: "2" },
                    ]}
                    onChange={handleSelectChange}
                    selectedSet={selectedOption}
                />
            </div>

            <div className="mobile-modal-content">
                <EditableText
                    onChange={handleTextChange}
                    textFromUploader={textData}
                />

                {modalContent === "file" && (
                    <FileTabContent
                        className={
                            modalContent === "file"
                                ? styles.imageTabContentActive
                                : styles.imageTabContent
                        }
                        onChange={handleFileChange}
                        page={"dashboard"}
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
                    />
                )}
            </div>

            <div className="mobile-modal-footer">
                <div className="mobile-post-actions">
                    <button onClick={() => setModalContent("link")}>
                        <i className="bi bi-link"></i>
                        Link
                    </button>
                    <button onClick={() => setModalContent("file")}>
                        <i className="bi bi-image"></i>
                        Media
                    </button>
                </div>
                
                <div className="mobile-post-send">
                <Button
                    className="mobile-submit-btn"
                    onClick={handleSubmitCreate}
                    disabled={disabled}
                >
                    Post
                </Button>
                <Button
                    className="mobile-close-btn"
                    onClick={() => onHandleClose()}
                >
                    Close
                </Button> </div>
            </div>
        </div>
    );
}
