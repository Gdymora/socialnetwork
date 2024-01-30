const Videos = ({ 
    handleShowVideos,
}: { 
    handleShowVideos: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center fotos">
            <h2>Videos</h2>    
               <div className="section">
                <button className="link-button" onClick={handleShowVideos}>
                    View all videos
                </button>
            </div>
        </div>
    );
};

export default Videos;
