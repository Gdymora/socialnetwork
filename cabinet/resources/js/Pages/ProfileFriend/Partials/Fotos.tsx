const Fotos = ({ 
    handleShowFotos,
}: { 
    handleShowFotos: () => void;
}) => {
    return (
        <div className="flex space-between align-items-center fotos">
            <h2>Fotos</h2> 

            <div className="section">
                <button className="link-button" onClick={handleShowFotos}>
                    View all fotos
                </button>
            </div>
        </div>
    );
};

export default Fotos;
