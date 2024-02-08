import { CSSProperties, useState } from "react";

import { UserFile } from "@/types";
import FileViewHeader from "./FileViewHeader";
import FileViewContent from "./FileViewContent";
import FileViewFooter from "./FileViewFooter";
import FileViewContentModal from "./FileViewContentModal";
interface UserFileProps {
    file: UserFile;
    contentModal?: boolean;
    onFileClick?: () => void | null;
    onNextClick?: (() => void | null) | undefined;
    onPrevClick?: (() => void | null) | undefined;
    onToggleLargeImage?: (() => void | null) | undefined;
}

export default function FileView({
    file,
    onFileClick,
    contentModal,
    onNextClick,
    onPrevClick,
    onToggleLargeImage,
}: UserFileProps) {
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
        <div style={postFile}>
            <FileViewHeader
                title={file.title}
                createdAt={file.created_at}
                visibility={file.visible}
                type={file.type}
                url={file.url}
            />{" "}
            {contentModal ? (
                <FileViewContentModal
                    media={file}
                    nextFile={onNextClick && (() => onNextClick())}
                    prevFile={onPrevClick && (() => onPrevClick())}
                    toggleLargeImage={
                        onToggleLargeImage && (() => onToggleLargeImage())
                    }
                />
            ) : (
                <div onClick={onFileClick}>
                    <FileViewContent media={file} />
                </div>
            )}{" "}
            <FileViewFooter
                onToggleComments={toggleComments}
                description={file.description}
            />
            {/* <Carousel users={randomUsersForFriendship}/> */}
        </div>
    );
}
