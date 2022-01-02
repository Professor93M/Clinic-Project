import axios from "axios";

export const postData = async (url, data) => {
  const a = await axios
    .post(`http://localhost:8000/api/${url}`, data)
    .then((response) => (response = response.data))
    .catch((err) => (err = err.response.data.errors));
  return a;
};
