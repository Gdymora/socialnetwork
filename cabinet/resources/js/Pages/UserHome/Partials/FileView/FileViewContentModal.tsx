import CustomAudioPlayer from "@/Components/CustomAudioPlayer";
import { LinkData, Media, UserFile } from "@/types";
import { CSSProperties, useState } from "react";

export default function FileViewContentModal({ media }: { media: UserFile }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const fileCard: CSSProperties = {
        overflow: "hidden",
        width: "100%",
        height: "auto",
        maxHeight: "80vh"
    };
    return (
        <div className="section"   >
            <div key={media.id}>
                {media.type === "image" && (
                    <div style={fileCard}   >
                        <img style={{objectFit: "contain", 
    aspectRatio: "4/3"}}
                            src={`/user-file/${media.url}`}
                            alt="Media"
                            loading="lazy"
                        />
                    </div>
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
