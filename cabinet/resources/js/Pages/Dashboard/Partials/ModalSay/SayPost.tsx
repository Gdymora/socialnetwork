import { ProfileData } from "@/types";

interface SayPostProps {
    onTextClick: () => void;
    onJobClick: () => void;
    profileData: ProfileData;
}
export default function SayPost({
    profileData,
    onTextClick,
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
                <input type="text" onClick={onTextClick} />
                </div>
                <div className="flex align-items-center post_message">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onJobClick}
                    >
                        Post a Job
                    </button>
                    <button
                        type="button"
                        className="but btn btn-danger"
                        onClick={onTextClick}
                    >
                        Post a message
                    </button>
                </div>
            </div>
        </>
    );
}
