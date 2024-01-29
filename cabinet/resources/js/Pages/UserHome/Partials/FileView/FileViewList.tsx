import { UserFile, UserFileFilteredByVisibility } from "@/types";
import FileView from "./FileView";
import { CSSProperties } from "react";

interface FileViewProps {
    files: UserFileFilteredByVisibility;
}

export default function FileViewList({ files }: FileViewProps) {
    const contentGrid: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
        margin: "10px",
        justifyItems: "center",
    };

    return (
        <>
            <div className="post">
                <h3>Private</h3>
                <div style={contentGrid}>
                    {files.private.map((file) => (
                        <FileView key={file.id} file={file} />
                    ))}
                </div>
            </div>
            <div className="post">
                <h3>Friends</h3>
                <div style={contentGrid}>
                    {files.friends.map((file) => (
                        <FileView key={file.id} file={file} />
                    ))}
                </div>{" "}
            </div>
            <div className="post">
                <h3>Public</h3>
                <div style={contentGrid}>
                    {files.public.map((file) => (
                        <FileView key={file.id} file={file} />
                    ))}
                </div>{" "}
            </div>
        </>
    );
}
