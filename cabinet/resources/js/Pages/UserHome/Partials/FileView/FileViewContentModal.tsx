import CustomAudioPlayer from "@/Components/CustomAudioPlayer";
import { UserFile } from "@/types";
import { CSSProperties, useState } from "react";

export default function FileViewContentModal({
    media,
    nextFile,
    prevFile,
    toggleLargeImage,
}: {
    media: UserFile;
    nextFile?: () => void | null;
    prevFile?: () => void | null;
    toggleLargeImage?: () => void | null;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const fileCard: CSSProperties = {
        overflow: "hidden",
        width: "100%",
        height: "auto",
        maxHeight: "80vh",
    };

    return (
        <div className="section">
            <div key={media.id}>
                {media.type === "image" && (
                    <>
                        <div style={fileCard}>
                            <img
                                style={{
                                    objectFit: "contain",
                                    aspectRatio: "4/3",
                                }}
                                src={`/user-file/${media.url}`}
                                alt="Media"
                                loading="lazy"
                                onDoubleClick={toggleLargeImage}
                            />
                            {/*   {<button onClick={prevFile}>Previous</button>}
                        {nextFile && (
                            <button onClick={nextFile}>Next Image</button>
                        )} */}
                        </div>
                        {/* Стрілки перемикачів */}
                        <div
                            className="arrow-switcher"
                            onClick={prevFile}
                            style={{ left: "30%" }}
                        >
                            &lt;
                        </div>
                        <div
                            className="arrow-switcher"
                            onClick={nextFile}
                            style={{ right: "20px" }}
                        >
                            &gt;
                        </div>
                    </>
                )}
                {media.type === "video" && (
                    <div style={fileCard}>
                        <video src={`/user-file/${media.url}`} controls />
                    </div>
                )}
                {media.type === "music" && (
                    <div style={fileCard}>
                        <CustomAudioPlayer src={`/user-file/${media.url}`} />
                    </div>
                )}
            </div>
        </div>
    );
}
