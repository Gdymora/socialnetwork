const Music = ({
    onAddMusics,
    handleShowMusics,
}: {
    onAddMusics: () => void;
    handleShowMusics: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center fotos">
            <h2>Music</h2>
            <div className="section">
                <button onClick={onAddMusics}>
                    Add musics
                </button>
            </div>

            <div className="section">
                <button onClick={handleShowMusics}>
                    View all music{" "}
                </button>
            </div>
        </div>
    );
};

export default Music;
