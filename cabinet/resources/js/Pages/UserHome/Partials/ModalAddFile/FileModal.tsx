import Modal from "@/Components/Modal";
import FileView from "../FileView/FileView";
import stylesModal from "./Modal.module.css";
import { UserFile } from "@/types";
interface FileModalProps {
    isModalOpen: boolean;
    modalContent: null | UserFile;
    onClose: (arg: boolean) => void;
    onNextClick: () => void;
    onPrevClick: () => void; 
}
export default function FileModal({
    isModalOpen,
    modalContent,
    onClose,
    onNextClick,
    onPrevClick, 
}: FileModalProps) {
    return (
        <Modal
            show={isModalOpen}
            overlayColor="black"
            maxWidth="4xl"
            onClose={onClose}
        >
            <div className="relative bg-white rounded-lg shadow-xl">
                <div className={stylesModal.modalHeader}>
                    <span>Modal Header</span>
                    <div
                        className={stylesModal.modalCloseButton}
                        onClick={() => onClose(false)}
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
                                <div style={{ width: "500px" }}>hhhh</div>
                                <FileView
                                    key={modalContent.id}
                                    file={modalContent}
                                    contentModal={isModalOpen}
                                    onNextClick={() => onNextClick()}
                                    onPrevClick={() => onPrevClick()}
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
    );
}
