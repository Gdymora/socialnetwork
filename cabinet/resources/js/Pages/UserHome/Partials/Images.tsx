const Images = ({
    onAddImages,
    handleShowImages,
}: {
    onAddImages: () => void;
    handleShowImages: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center images">
            <h2>Images</h2>
            <div className="section">
                <button className="link-button" onClick={onAddImages}>
                    Add Images
                </button>
            </div>

            <div className="section">
                <button className="link-button" onClick={handleShowImages}>
                    View all Images
                </button>
            </div>
        </div>
    );
};

export default Images;
