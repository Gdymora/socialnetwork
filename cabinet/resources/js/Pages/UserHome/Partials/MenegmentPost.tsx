import { ProfileData } from "@/types";

const MenegmentPost = ({ profileData }: { profileData: ProfileData }) => {
    return (
        <div className="profile-posts">
            <div className="flex space-between align-items-center">
                <h2>Posts</h2>
                <div className="flex space-between align-items-center">
                    <div className="button-tag">
                        <i className="bi bi-sliders mr-1"></i> Filters
                    </div>
                    <div className="button-tag">
                        <i className="bi bi-gear mr-1"></i>
                        Post management
                    </div>
                </div>
            </div>
            <div className="flex border-block-end"></div>
            <div className="flex space-between align-items-center">
                <div className="flex align-items-center justify-content-center color-danger bg-danger-bottom">
                    <i className="bi bi-list mr-1"></i>List
                </div>
                <div className="flex justify-content-center">
                    <i className="bi bi-grid-3x3-gap mr-1"></i>
                    Grid
                </div>
            </div>
        </div>
    );
};

export default MenegmentPost;
