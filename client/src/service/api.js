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
        const response= await axios.get(`${url}/getusers`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      return response.data;

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

  export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}