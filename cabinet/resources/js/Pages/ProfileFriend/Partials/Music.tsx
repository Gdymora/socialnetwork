const Music = ({
    handleShowMusics,
}: {
    handleShowMusics: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center fotos">
            <h2>Music</h2>          

            <div className="section">
                <button className="link-button" onClick={handleShowMusics}>
                    View all music{" "}
                </button>
            </div>
        </div>
    );
};

export default Music;
