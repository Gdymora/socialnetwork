const Fotos = ({
    onAddFotos,
    handleShowFotos,
}: {
    onAddFotos: () => void;
    handleShowFotos: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center fotos">
            <h2>Fotos</h2>
            <div className="section">
                <button className="link-button" onClick={onAddFotos}>
                    Add Fotos
                </button>
            </div>

            <div className="section">
                <button className="link-button" onClick={handleShowFotos}>
                    View all fotos
                </button>
            </div>
        </div>
    );
};

export default Fotos;
