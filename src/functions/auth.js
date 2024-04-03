import axios from "axios";
import toast from "react-hot-toast";


export const createAccount = async ( first_name,last_name, email, mobile,number,idImages, gender, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/auth/register`,
        {
          first_name,last_name, email, mobile,number,idImages, gender, password
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error?.message);
    }
  };



