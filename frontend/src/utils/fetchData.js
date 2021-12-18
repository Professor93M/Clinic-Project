import axios from "axios";

export const postData = async (url, data) => {
  const response = await axios({
    method: "post",
    url: `http://localhost/8000/api/${url}`,
    data: data,
  });
  return response.data;
};
