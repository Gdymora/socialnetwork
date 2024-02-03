import { CSSProperties, useState } from "react";

import { UserFile } from "@/types";
import FileViewHeader from "./FileViewHeader";
import FileViewContent from "./FileViewContent";
import FileViewFooter from "./FileViewFooter";
interface UserFileProps {
    file: UserFile;
    onFileClick?: () => void | null;
}

export default function FileView({ file, 
    onFileClick }: UserFileProps) {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const postFile: CSSProperties = {
        maxWidth: "100%",
        backgroundColor: "var(--content-bg-color)",
        border: "1px solid #ddd",
        padding: "7px",
        margin: "4px",
    };

    return (
        <div style={postFile} 
        onClick={onFileClick}>
            <FileViewHeader
                title={file.title}
                createdAt={file.created_at}
                visibility={file.visible}
                type={file.type}
                url={file.url}
            />
            <FileViewContent media={file} />
            <FileViewFooter
                onToggleComments={toggleComments}
                description={file.description}
            />
            {/* <Carousel users={randomUsersForFriendship}/> */}
        </div>
    );
}
