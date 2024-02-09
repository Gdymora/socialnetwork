const LargeImage = ({
    showLargeImage,
    url,
    toggleLargeImage,
}: {
    showLargeImage: boolean;
    url: string;
    toggleLargeImage: () => {};
}) => {
    return (
        showLargeImage && (
            <div className="large-image" onClick={() => toggleLargeImage()}>
                <img src={`${url}`} alt="Large Media" />
            </div>
        )
    );
};

export default LargeImage;

/*
const [showLargeImage, setShowLargeImage] = useState(false);
const toggleLargeImage = () => {
    setShowLargeImage(!showLargeImage);
};
 <LargeImage showLargeImage={true} url={url}> toggleLargeImage={toggleLargeImage}/>

<LargeImage
                            showLargeImage={showLargeImage}
                            url={`/media/${mediaItem.url}`}
                            toggleLargeImage={toggleLargeImage}
                        />
*/
