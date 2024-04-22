import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import axios from "axios";
import LinkPreviewModal from "./LinkPreviewModal";
import { LinkData } from "@/types";

const LinkTabContent = ({
    onChange,
    className,
    dataLink,
}: {
    className: string;
    onChange: (value: LinkData) => void;
    dataLink?: any;
}) => {
    const [link, setLink] = useState<string>(dataLink?.url || "");
    const [linkData, setLinkData] = useState(dataLink || null);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");

    const fetchLinkData = async (url: string) => {
        try {
            const response = await axios.get(
                `/link-preview/${encodeURIComponent(url)}`
            );
            setLinkData(response.data);
            setError("");
        } catch (err) {
            setError("Неможливо отримати дані за посиланням");
        }
    };

    useEffect(() => {
        if (linkData) {
            onChange(linkData);
        }
    }, [linkData]);

    useEffect(() => {
        if (link) {
            handleLinkSubmit();
        }
    }, [link]);

    const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    };

    const onDeleteLink = () => {
        setLinkData(null);
        setLink("");
    };

    const handleLinkSubmit = () => {
        if (link.startsWith("http://") || link.startsWith("https://")) {
            fetchLinkData(link);
            setIsEditing(false);
        } else {
            setError("Введено некоректне посилання");
        }
    };

    return (
        <div className={className}>
            {isEditing ? (
                <input
                    type="text"
                    value={link}
                    onChange={handleLinkChange}
                    autoFocus
                />
            ) : (
                <div onClick={() => setIsEditing(true)}>
                    {link || "Введіть посилання"}
                </div>
            )}

            {linkData && (
                <LinkPreviewModal linkData={linkData} onDelete={onDeleteLink} />
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default LinkTabContent;
