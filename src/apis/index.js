import axios from "axios";

export const getUsers = () => {
  return api("http://localhost:4000/members", "get");
};
export const getMessages = () => {
  return api("http://localhost:4000/messages", "get");
};

const api = async (url, method) => {
  const options = {
    method,
    url
  };
  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};
