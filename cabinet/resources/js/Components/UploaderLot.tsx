import React, { useState, DragEvent, ChangeEvent, useEffect } from "react";

interface UploaderProps {
    onChange: (files: FileList | null) => void;
    style?: React.CSSProperties;
    className?: string;
    page?: string;
    prewiewForUpdate?: { url: string; type: string }[] | null;
}

const Uploader = ({
    onChange,
    style,
    className,
    page,
    prewiewForUpdate,
}: UploaderProps) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0) {
            setFiles(droppedFiles);
            const urls = Array.from(droppedFiles).map((file) =>
                URL.createObjectURL(file)
            );
            setPreviewUrls(urls);
            onChange(droppedFiles);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = e.target.files;
            setFiles(selectedFiles);
            const urls = Array.from(selectedFiles).map((file) =>
                URL.createObjectURL(file)
            );
            setPreviewUrls(urls);
            onChange(selectedFiles);
        }
    };

    const handleDeleteFile = (index: number) => {
        if (files && previewUrls) {
            const updatedFiles = Array.from(files);
            updatedFiles.splice(index, 1);
            const updatedUrls = Array.from(previewUrls);
            updatedUrls.splice(index, 1);
            setFiles(new FileList(updatedFiles));
            setPreviewUrls(updatedUrls);
            onChange(new FileList(updatedFiles));
        }
    };

    useEffect(() => {
        return () => {
            if (previewUrls.length > 0) {
                previewUrls.forEach((url) => URL.revokeObjectURL(url));
            }
        };
    }, [previewUrls]);

    const uploaderStyle: React.CSSProperties = {
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        ...style,
    };

    const imageVideoStyle: React.CSSProperties = {
        height: "100%",
        objectFit: "contain",
    };

    const audioStyle: React.CSSProperties = {
        objectFit: "contain",
    };

    return (
        <div
            style={uploaderStyle}
            className={className}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput")?.click()}
        >
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
                multiple
            />
            Click or drag files here
            {previewUrls.map((url, index) => (
                <div key={index} style={{ marginTop: "10px" }}>
                    {files && files[index] && (
                        <div>
                            <button onClick={() => handleDeleteFile(index)}>
                                Delete
                            </button>
                            {files[index].type.startsWith("image/") && (
                                <img
                                    src={url}
                                    alt="Preview"
                                    style={imageVideoStyle}
                                />
                            )}
                            {files[index].type.startsWith("video/") && (
                                <video
                                    src={url}
                                    controls
                                    style={imageVideoStyle}
                                />
                            )}
                            {page !== "dashboard" &&
                                files[index].type.startsWith("audio/") && (
                                    <audio
                                        src={url}
                                        controls
                                        style={audioStyle}
                                    />
                                )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Uploader;
