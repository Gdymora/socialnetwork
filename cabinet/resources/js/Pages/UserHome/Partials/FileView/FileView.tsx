import { useState } from "react";

import { PostType } from "@/types";
import FileViewHeader from "./FileViewHeader";
import FileViewContent from "./FileViewContent";
import FileViewFooter from "./FileViewFooter";
interface PostProps {
    file: PostType;
}

export default function FileView({ file }: PostProps) {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };
    return (
        <div className="post">
            <FileViewHeader
                author={file.author}
                createdAt={file.created_at}
                visibility={file.visibility}
            />
            <FileViewContent
                title={file.title}
                media={file.media}
                links={file.links}
                content={file.content}
                maxLength={100}
            />
            <FileViewFooter
                onToggleComments={toggleComments}
                // onLike={...}
                // onShare={...}
            />
            {/* <Carousel users={randomUsersForFriendship}/> */}
        </div>
    );
}
