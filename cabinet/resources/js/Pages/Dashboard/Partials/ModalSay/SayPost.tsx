import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { ProfileData } from "@/types";

interface SayPostProps { 
    onFileClick: () => void;
    onTextClick: () => void;
    onJobClick: () => void;
    profileData: ProfileData;
}
export default function SayPost({
    profileData,
    onTextClick, 
    onFileClick,
    onJobClick,
}: SayPostProps) {
    return (
        <>
            <div className="section_say">
                <div className="circle">
                    <img
                        src={
                            profileData.profile_image_url ||
                            "assets/images/noimg.png"
                        }
                        alt=""
                    />
                </div>
                <div className="form flex align-items-center">
                    <TextInput onClick={onTextClick} />
                </div>

                <div className="flex align-items-center post_message">
                    <Button
                        className="but btn btn-danger"
                        onClick={onFileClick}
                    >
                        Image/Video
                    </Button> 
                    <Button className="btn btn-secondary" onClick={onJobClick}>
                        Job
                    </Button>
                </div>
            </div>
        </>
    );
}
