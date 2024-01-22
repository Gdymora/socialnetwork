import { useState } from "react";
import SayPost from "./SayPost";
import Modal from "@/Components/Modal";
import { ProfileData } from "@/types";
import TextTabContent from "./TextTabContent";
import JobTabContent from "./JobTabContent";
import styles from "./TabContent.module.css";
export default function ParentSayPost({
    profileData,
}: {
    profileData: ProfileData;
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("text");

    const handleOpenModal = (content: string) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    return (
        <>
            <SayPost
                profileData={profileData}
                onTextClick={() => handleOpenModal("text")}
                onJobClick={() => handleOpenModal("job")}
            />
            {isModalOpen && (
                <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    dfdf
                    {modalContent === "text" && (
                        <TextTabContent
                            className={
                                modalContent === "text"
                                    ? styles.textTabContentActive
                                    : styles.textTabContent
                            }
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
                    {" аа"}
                </Modal>
            )}
        </>
    );
}
