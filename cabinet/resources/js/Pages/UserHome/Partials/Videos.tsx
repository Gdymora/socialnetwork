const Videos = ({
    onAddVideos,
    handleShowVideos,
}: {
    onAddVideos: () => void;
    handleShowVideos: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center fotos">
            <h2>Videos</h2>         
            <div className="section">
                <button onClick={onAddVideos}>
                    Add videos
                </button>
            </div>
               <div className="section">
                <button onClick={handleShowVideos}>
                    View all videos
                </button>
            </div>
        </div>
    );
};

export default Videos;
