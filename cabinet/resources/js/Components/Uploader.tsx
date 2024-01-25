import { OnChangeFunction } from "@/types";
import React, { useState, DragEvent, ChangeEvent, useEffect } from "react";
interface UploaderProps {
    onChange: OnChangeFunction;
    style?: React.CSSProperties;
    className?: string;
}

const Uploader = ({ onChange, style, className }: UploaderProps) => {
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
        if (file) {
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
        //height: '100%', // Висота картинки чи відео
        //objectFit: 'contain', // Збереження пропорцій без спотворення
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
            Клікніть або перетягніть файл сюди
            {/* {file && (
                <div>
                    {file.type.startsWith("image/") && (
                        <img src={previewUrl} alt="Preview" />
                    )}
                    {file.type.startsWith("video/") && (
                        <video src={previewUrl} controls />
                    )}
                </div>
            )} */}
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
                </div>
            )}
        </div>
    );
};

export default Uploader;
