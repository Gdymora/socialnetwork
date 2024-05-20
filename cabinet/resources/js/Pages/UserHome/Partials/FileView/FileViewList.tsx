import { UserFile, UserFileFilteredByVisibility } from "@/types";
import { useEffect, useState } from "react";
import SelectButton from "@/Components/SelectButton";
import MediaCarousel from "@/Components/MediaCarousel";
import FileCategoryView from "./FileCategoryView";

interface FileViewProps {
    files: UserFileFilteredByVisibility;
}

export default function FileViewList({ files }: FileViewProps) {
    const [allFiles, setAllFiles] = useState<UserFile[]>([]);
    const [filteredFiles, setАilteredFiles] = useState<UserFile[]>([]);
    const [currentFileIndex, setCurrentFileIndex] = useState<number>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Об'єднаємо всі файли з різних розділів в один масив
        const mergedFiles: UserFile[] = [
            ...files?.public,
            ...files?.private,
            ...files?.friends,
        ];
        setAllFiles(mergedFiles);
    }, [files]);

    const handleOpenModal = (selectedFile: UserFile, index: number) => {
        if (selectedFile) {
            const filteredFiles = allFiles.filter(
                (file) => file.type === selectedFile.type
            );

            const globalIndex = filteredFiles.findIndex(
                (file) => file.id === selectedFile.id
            );
            setCurrentFileIndex(globalIndex);
            setАilteredFiles(filteredFiles);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [selectedOption, setSelectedOption] = useState<string | number>(
        "all"
    );

    const handleSelectChange = (value: string | number) => {
        setSelectedOption(value);
    };

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
                <MediaCarousel
                    media={filteredFiles}
                    startIndex={currentFileIndex}
                    onClose={handleCloseModal}
                />
            )}

            <FileCategoryView
                title="Private"
                files={files.private.filter(
                    (file) =>
                        selectedOption === "all" || file.type === selectedOption
                )}
                onFileClick={handleOpenModal}
            />
            <FileCategoryView
                title="Friends"
                files={files.friends.filter(
                    (file) =>
                        selectedOption === "all" || file.type === selectedOption
                )}
                onFileClick={handleOpenModal}
            />
            <FileCategoryView
                title="Public"
                files={files.public.filter(
                    (file) =>
                        selectedOption === "all" || file.type === selectedOption
                )}
                onFileClick={handleOpenModal}
            />
        </>
    );
}
