const Images = ({ 
    handleShowImages,
}: { 
    handleShowImages: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center images">
            <h2>Images</h2> 

            <div className="section">
                <button className="link-button" onClick={handleShowImages}>
                    View all images
                </button>
            </div>
        </div>
    );
};

export default Images;
