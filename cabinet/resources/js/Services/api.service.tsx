// apiService.ts
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://your-laravel-app.com';

interface PostData {
  text: string;
  option: string;
  file?: File;
}

const apiService = {
  submitPost: async (data: PostData): Promise<any> => {
    const formData = new FormData();
    formData.append('text', data.text);
    formData.append('option', data.option);
    if (data.file) {
      formData.append('file', data.file);
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/posts`, formData);
      return response.data;
    } catch (error) {
      console.error("Error submitting post data", error);
      throw error;
    }
  }
};

export default apiService;
