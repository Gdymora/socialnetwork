import { ProfileData } from "@/types";
import Videos from "./Videos";
import Music from "./Music"; 
import Posts from "./Posts";
import Images from "./Images";

export default function FriendFile({
    profileData,
    onToggleFiles,
}: {
    profileData: ProfileData;
    onToggleFiles: (shouldShowFiles: boolean, typeFiles: string) => void;
}) { 
    
    return (
        <>
            <Images
                handleShowImages={() => onToggleFiles(true, "image")}
            />
            <Music
                handleShowMusics={() => onToggleFiles(true, "music")}
            />
            <Videos
                handleShowVideos={() => onToggleFiles(true, "video")}
            />
            <Posts handleShowPosts={() => onToggleFiles(false, "post")} />
        </>
    );
}
