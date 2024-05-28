import CustomAudioPlayer from "@/Components/CustomAudioPlayer";
import { UserFile } from "@/types";
import { CSSProperties, useState } from "react";

export default function FileViewContent({ media }: { media: UserFile }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const fileCard: CSSProperties = {
        overflow: "hidden",
        width: "100%",
        height: "auto",
    };
    return (
        <div className="section">
            <div key={media.id}>
                {media.type === "image" && (
                    <div style={fileCard}>
                        <img
                            src={`/user-file/${media.url}`}
                            alt="Media"
                            loading="lazy"
                        />
                    </div>
                )}
                {media.type === "video" && (
                    <div style={fileCard}>
                        <video src={`/user-file/${media.url}`} />
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
