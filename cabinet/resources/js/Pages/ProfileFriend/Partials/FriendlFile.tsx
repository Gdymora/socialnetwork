import { ProfileData } from "@/types";
import Videos from "./Videos";
import Music from "./Music";
import Fotos from "./Fotos";
import Posts from "./Posts";

export default function FriendFile({
    profileData,
    onToggleFiles,
}: {
    profileData: ProfileData;
    onToggleFiles: (shouldShowFiles: boolean, typeFiles: string) => void;
}) { 
    
    return (
        <>
            <Fotos
                handleShowFotos={() => onToggleFiles(true, "foto")}
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
