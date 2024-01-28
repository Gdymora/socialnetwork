import { PostType, RandomUserForFriendship } from "@/types";
import FileView from "./FileView";

interface FileViewProps {
    files: PostType[];
}

export default function FileViewList({ files }: FileViewProps) {
    return (
        <div className="posts">
            {files.map((file) => (
                <FileView key={file.id} file={file} />
            ))}
        </div>
    );
}
