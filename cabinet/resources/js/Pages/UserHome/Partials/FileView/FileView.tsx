import { CSSProperties, useState } from "react";

import { UserFile } from "@/types";
import FileViewHeader from "./FileViewHeader";
import FileViewContent from "./FileViewContent";
import FileViewFooter from "./FileViewFooter";
interface UserFileProps {
    file: UserFile;
    contentModal?: boolean;
    onFileClick?: () => void | null;
    onNextClick?: () => void | null;
    onPrevClick?: () => void | null; 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, item: File) => void;
    selectedItems: File[];
}

const postFile: CSSProperties = {
    maxWidth: "100%",
    backgroundColor: "var(--content-bg-color)",
    border: "1px solid #ddd",
    padding: "7px",
    margin: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
};

export default function FileView({
    file,
    onFileClick,
    handleChange,
    selectedItems,
}: any) {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div style={postFile}>
            <div>
                <div className="flex justify-between items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedItems.some((i: any) => i.id === file.id)}
                        onChange={(e) => handleChange(e, file as any)}
                    />
                    <FileViewHeader file={file} />
                </div>
                <div onClick={onFileClick}>
                    <FileViewContent media={file} />
                </div>
            </div>
            <FileViewFooter
                onToggleComments={toggleComments}
                description={file.description}
                title={file.title}
            />
        </div>
    );
}
