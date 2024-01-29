import axios from 'axios';
import { useState } from 'react';

const useAxiosPost = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = (postData) => {
        setLoading(true);
        setData(null);
        setError(null);

        axios.post(url, postData)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { postData, data, loading, error };
};

export default useAxiosPost;
/* 
const MyComponent = () => {
    const { postData, data, loading, error } = useAxiosPost('/your-endpoint');

    const handleSetAsProfilePicture = (url) => {
        postData({ url: url });
    };

    // Решта коду компонента...

    return (
        <div> 
            <button onClick={() => handleSetAsProfilePicture(yourImageUrl)}>
                Set as profile picture
            </button> 
            {loading && <p>Loading...</p>}
            {error && <p>Error occurred!</p>}
        </div>
    );
};
*/