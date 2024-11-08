import axios from "axios";
import { useState } from "react";
const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = async (method = "get", requestData = {}, config = {}, customUrl) => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const response = await axios({
        url: customUrl || url,
        method,
        data: requestData,
        ...config
      });
      setData(response.data);
    } catch (error2) {
      console.log(error2);
      if (error2.response && error2.response.status === 401) {
        window.location.href = "/";
        localStorage.removeItem("token");
      } else {
        setError(error2);
      }
      setError(error2);
    } finally {
      setLoading(false);
    }
  };
  return { sendRequest, data, loading, error };
};
const useAxios$1 = useAxios;
export {
  useAxios$1 as u
};
