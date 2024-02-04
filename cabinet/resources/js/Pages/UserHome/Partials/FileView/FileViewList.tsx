import { UserFile, UserFileFilteredByVisibility } from "@/types";
import FileView from "./FileView";
import { CSSProperties, useState } from "react";
import Modal from "@/Components/Modal";

import stylesModal from "./Modal.module.css";
import FileViewContentModal from "./FileViewContentModal";
interface FileViewProps {
    files: UserFileFilteredByVisibility;
}

export default function FileViewList({ files }: FileViewProps) {
    const contentGrid: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
        margin: "10px",
        justifyItems: "center",
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<null | UserFile>(null);
    const handleOpenModal = (content: null | UserFile) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="post">
                <h3>Private</h3>
                <div style={contentGrid}>
                    {files.private.map((file) => (
                        <FileView
                            key={file.id}
                            file={file}
                            onFileClick={() => handleOpenModal(file)}
                        />
                    ))}
                </div>
            </div>
            <div className="post">
                <h3>Friends</h3>
                <div style={contentGrid}>
                    {files.friends.map((file) => (
                        <FileView
                            key={file.id}
                            file={file}
                            onFileClick={() => handleOpenModal(file)}
                        />
                    ))}
                </div>{" "}
            </div>
            <div className="post">
                <h3>Public</h3>
                <div style={contentGrid}>
                    {files.public.map((file) => (
                        <FileView
                            key={file.id}
                            file={file}
                            onFileClick={() => handleOpenModal(file)}
                        />
                    ))}
                </div>{" "}
            </div>

            {isModalOpen && (
                <Modal
                    show={isModalOpen}
                    overlayColor="black"
                    maxWidth = "7xl"
                    onClose={() => setIsModalOpen(false)}
                >
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
                        <div className="overflow-y-auto max-h-[90vh]">
                            <div className={stylesModal.modalContent}>
                                {modalContent && (
                                    <div className="flex">
                                        <div style={{width:"500px"}}>hhhh</div>
                                        <FileView 
                                            key={modalContent.id}
                                            file={modalContent}
                                            contentModal={isModalOpen}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={stylesModal.modalFooter}>
                            <div className="flex align-items-center post_message"></div>
                        </div>
                        <div className={stylesModal.modalFooter}></div>
                    </div>
                </Modal>
            )}
        </>
    );
}
