import axios from 'axios';
import { useState } from 'react';

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (method = 'get', requestData = {}, config = {}) => {
        setLoading(true);
        setData(null);
        setError(null);

        try {
            const response = await axios({
                url,
                method,
                data: requestData,
                ...config
            });
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { sendRequest, data, loading, error };
};

export default useAxios;

/* 
import React, { useState, useEffect } from 'react';
import useAxios from '@/Hooks/useAxios'; // Змініть шлях до відповідного розташування хука

export default function FriendCard({
    profileData,
    isFriendAndFollow,
}) {
    const { id, name, last_name, profile_image_url } = profileData;
    const { isFriend } = isFriendAndFollow;
    const { sendRequest } = useAxios(); // Використовуйте хук тут

    const handleAddFriend = () => {
        sendRequest('post', {}, { url: `/friends/${id}/follow` });
        // Ваша логіка після успішного запиту
    };

    const handleDeleteFriend = () => {
        sendRequest('delete', {}, { url: `/friends/${id}/unfollow` });
        // Ваша логіка після успішного запиту
    };

    // Рендер компонента...
}
*/