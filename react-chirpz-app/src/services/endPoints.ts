export const BASE_URL = {
  baseUrl : "http://localhost:4000/api/v1"
};


const SUB_URL = {
  getChirpzListApiUrl: "/posts?_sort=createdAt&_order=desc",
  postChirpzListApiUrl: "/posts",
};

export const getChirpzListApi = `${BASE_URL.baseUrl}${SUB_URL.getChirpzListApiUrl}`;
export const postChirpzListApi = `${BASE_URL.baseUrl}${SUB_URL.postChirpzListApiUrl}`;
