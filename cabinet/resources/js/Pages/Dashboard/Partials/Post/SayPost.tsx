import { ProfileData } from "@/types";

export default function SayPost({ profileData }: { profileData: ProfileData }) {
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
                    <input type="text" />
                </div>
                <div className="flex align-items-center post_message">
                    <button type="button" className="btn btn-secondary">
                        Post a Job
                    </button>
                    <button type="button" className="but btn btn-danger">
                        Post a message
                    </button>
                </div>
            </div>
        </>
    );
}
