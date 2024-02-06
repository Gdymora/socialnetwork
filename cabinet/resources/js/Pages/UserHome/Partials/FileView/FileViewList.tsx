import { UserFile, UserFileFilteredByVisibility } from "@/types";
import FileView from "./FileView";
import { CSSProperties, useEffect, useState } from "react";
import SelectButton from "@/Components/SelectButton";
import FileModal from "../ModalAddFile/FileModal";
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
    const [allFiles, setAllFiles] = useState<UserFile[]>([]);
    const [currentFileIndex, setCurrentFileIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<null | UserFile>(null);
    const [typeFileClick, setTypeFileClick] = useState<
        null | string | undefined
    >("");
    useEffect(() => {
        // Об'єднаємо всі файли з різних розділів в один масив
        const mergedFiles: UserFile[] = [
            ...files.public,
            ...files.private,
            ...files.friends,
        ];
        setAllFiles(mergedFiles);
    }, [files]);

    const nextFile = () => {
        if (currentFileIndex < filteredFiles.length - 1) {
            setCurrentFileIndex(currentFileIndex + 1);
        } else {
            setCurrentFileIndex(0);
        }
    };

    const prevFile = () => {
        if (currentFileIndex > 0) {
            setCurrentFileIndex(currentFileIndex - 1);
        }
    };

    const filteredFiles = allFiles.filter(
        (file) => file.type === typeFileClick
    );

    const handleOpenModal = (content: null | UserFile) => {
        console.log(content?.type);
        setTypeFileClick(content?.type);
        setModalContent(content);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalContent(null);
        setIsModalOpen(false);
    };

    const [selectedOption, setSelectedOption] = useState<string | number>(
        "all"
    );

    const handleSelectChange = (value: string | number) => {
        setSelectedOption(value);
    };
    const toggleLargeImage = () => {
        setShowLargeImage(!showLargeImage);
    };

    const [showLargeImage, setShowLargeImage] = useState(false);
    return (
        <>
            <div className="post">
                <div className="post-header">
                    <div className="text">
                        <p className="bold">File</p>
                        {/*  <p className="text-light">my</p> */}
                    </div>
                    <div className="flex justify-content-right">
                        <SelectButton
                            size="small"
                            style={{
                                backgroundColor: "lightblue",
                            }}
                            options={[
                                { label: "All", value: "all" },
                                { label: "Image", value: "image" },
                                { label: "Video", value: "video" },
                                { label: "Music", value: "music" },
                            ]}
                            onChange={handleSelectChange}
                        />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <FileModal
                    isModalOpen={isModalOpen}
                    modalContent={filteredFiles[currentFileIndex]}
                    onClose={handleCloseModal}
                    onNextClick={() => nextFile()}
                    onPrevClick={() => prevFile()}
                    onToggleLargeImage={() => toggleLargeImage()}
                />
            )}
            {/* Велике зображення */}
            {showLargeImage && (
                <div className="large-image" onClick={toggleLargeImage}>
                    <img
                        src={`/user-file/${filteredFiles[currentFileIndex].url}`}
                        alt="Large Media"
                    />
                    <div
                        className="arrow-switcher"
                        onClick={prevFile}
                        style={{ left: "30%" }}
                    >
                        &lt;
                    </div>
                    <div
                        className="arrow-switcher"
                        onClick={nextFile}
                        style={{ right: "20px" }}
                    >
                        &gt;
                    </div>
                </div>
            )}
            <div className="post">
                <h3>Private</h3>
                <div style={contentGrid}>
                    {files.private
                        .filter((file) => {
                            if (selectedOption === "all") {
                                return true; // Повертаємо всі файли, якщо обрано 'All'
                            } else {
                                return file.type === selectedOption; // Фільтруємо за обраним значенням
                            }
                        })
                        .map((file) => (
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
                    {files.friends
                        .filter((file) => {
                            if (selectedOption === "all") {
                                return true; // Повертаємо всі файли, якщо обрано 'All'
                            } else {
                                return file.type === selectedOption; // Фільтруємо за обраним значенням
                            }
                        })
                        .map((file) => (
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
                    {files.public
                        .filter((file) => {
                            if (selectedOption === "all") {
                                return true; // Повертаємо всі файли, якщо обрано 'All'
                            } else {
                                return file.type === selectedOption; // Фільтруємо за обраним значенням
                            }
                        })
                        .map((file) => (
                            <FileView
                                key={file.id}
                                file={file}
                                onFileClick={() => handleOpenModal(file)}
                            />
                        ))}
                </div>{" "}
            </div>
        </>
    );
}
