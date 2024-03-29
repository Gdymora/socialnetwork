const Posts = ({ handleShowPosts }: { handleShowPosts: () => void }) => {
    return (
        <div className="flex space-between align-items-center images">
            <h2>Posts</h2>
            <div className="section">
                <button className="link-button" onClick={handleShowPosts}>
                    View all posts
                </button>
            </div>
        </div>
    );
};

export default Posts;
