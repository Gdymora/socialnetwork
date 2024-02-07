import { OnChangeFunction } from "@/types";
import React, { useState, DragEvent, ChangeEvent, useEffect } from "react";
interface UploaderProps {
    onChange: OnChangeFunction;
    style?: React.CSSProperties;
    className?: string;
    page?: string;
}

const Uploader = ({ onChange, style, className, page }: UploaderProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            setFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            onChange(file); // Повідомити батьківський компонент про вибір файлу
            /* Важливо: Blob URL має бути вивільнений за допомогою URL.revokeObjectURL() після того, як він більше не потрібен, для  */
        }
    };

    useEffect(() => {
        //URL.revokeObjectURL()
        if (file) {
            {
                console.log(file.type);
            }
            onChange(file);
        }
    }, [file]); // Залежить від зміни file

    const uploaderStyle: React.CSSProperties = {
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        ...style,
    };

    const uploaderWindowStyle: React.CSSProperties = {
        //maxWidth: '500px', // Максимальна ширина контейнера
        //maxHeight: '500px', // Максимальна висота контейнера
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
            />
            Click or drag the file here
            {file && (
                <div style={uploaderWindowStyle}>
                    {file.type.startsWith("image/") && (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            style={imageVideoStyle}
                        />
                    )}
                    {file.type.startsWith("video/") && (
                        <video
                            src={previewUrl}
                            controls
                            style={imageVideoStyle}
                        />
                    )}

                    {page !== "dashboard" && file.type.startsWith("audio/") && (
                        <audio src={previewUrl} controls style={audioStyle} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Uploader;
