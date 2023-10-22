import { fetchConfig } from "./fecthConfig";

const fetchPostData = async (url: string, payload: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(payload),
  };
  return fetchConfig(url, options);
};



const fetchData = async (url: string) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
  return fetchConfig(url, options);
};

const fetchAPIServices = {
  fetchData: fetchData,
  fetchPostData: fetchPostData,
};

export default fetchAPIServices;
