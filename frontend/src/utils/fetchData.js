import axios from "axios";

export const postData = async (url, data) => {
  const response = await axios.post(`http://localhost:8000/api/${url}`, data);
  // return response;
  console.log(response.data);
};
