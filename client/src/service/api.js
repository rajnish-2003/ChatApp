import axios from 'axios';

const url="http://localhost:8000";
export const AddUser = async (data) => {
    try {
      await axios.post(`${url}/add`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.log("Error while calling AddUser API: ", error);
      if (error.response) {
        console.log("Response Error:", error.response);
      } else if (error.request) {
        console.log("Request Error:", error.request);
      } else {
        console.log("General Error:", error.message);
      }
    }
  };





  export const getUser = async () => {
    try {
        const response= await axios.get(`${url}/getuserinfo`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.log("Error while calling AddUser API: ", error);
      if (error.response) {
        console.log("Response Error:", error.response);
      } else if (error.request) {
        console.log("Request Error:", error.request);
      } else {
        console.log("General Error:", error.message);
      }
    }
  };