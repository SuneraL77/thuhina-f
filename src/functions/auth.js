import axios from "axios";


export const createAccount = async (username) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/auth/register`,
        {
            username
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error?.message);
    }
  };