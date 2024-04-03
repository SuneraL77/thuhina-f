import axios from "axios";
import toast from "react-hot-toast";

export const createPakage = async (name, days, price, desciription) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/admin/add/package`,
      {
        name, days, price, desciription
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error?.message);
  }
};

export const showPakages = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/admin/view/package`,null,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error?.message);
  }
};

export const packageStatus = async (packageId,status) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/admin/change/packge/${packageId}`,{
status
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error?.message);
  }
};
