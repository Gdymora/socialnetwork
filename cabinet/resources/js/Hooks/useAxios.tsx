import axios from "axios";
import { useState } from "react";
import { ErrorInfo } from "react-dom/client";


/* 
якщо метод put на ларавел то надсилаємо методом post але додаємо атрибут _method
const formData = new FormData(); 
formData.append('_method', 'put'); 
*/
const useAxios = (url?: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (
        method = "get",
        requestData = {},
        config = {},
        customUrl?: string
    ) => {
        setLoading(true);
        setData(null);
        setError(null);

        try {
            const response = await axios({
                url: customUrl || url,
                method,
                data: requestData,
                ...config,
            });
            setData(response.data);
        } catch (error: any) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                window.location.href = "/";
                localStorage.removeItem("token");
            } else {
                setError(error);
            }
            setError(error);
            // @ts-ignore
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
