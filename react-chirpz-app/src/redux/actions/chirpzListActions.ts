export const chirpzListAction ={
    GET_CHIRPZ_LIST : "GET_CHIRPZ_LIST",
    SET_CHIRPZ_LIST : "SET_CHIRPZ_LIST",
    GET_CHIRPZ_LIST_POST : "GET_CHIRPZ_LIST_POST",
    SET_CHIRPZ_LIST_POST : "SET_CHIRPZ_LIST_POST",
    SHOW_LOADER_CHRIPZ_POST: "SHOW_LOADER_CHRIPZ_POST",
    HIDE_LOADER_CHRIPZ_POST: "HIDE_LOADER_CHRIPZ_POST"
}

export const getChirpzListData = (payload:any) => ({
    type:chirpzListAction.GET_CHIRPZ_LIST,
    payload:payload,
});

export const setChirpzListData = (chirpzListData:any) => ({
    type:chirpzListAction.SET_CHIRPZ_LIST,
    chirpzListData
});

export const getChirpzListDataPost = (payload:any) => ({
    type: chirpzListAction.GET_CHIRPZ_LIST_POST,
    payload:payload,
  });
  
  export const setChirpzListDataPost = (chirpzListDataPost:any) => ({
    type: chirpzListAction.SET_CHIRPZ_LIST_POST,
    chirpzListDataPost
  });

  export const setLoaderChirpzPost = () => ({
    type: chirpzListAction.SHOW_LOADER_CHRIPZ_POST,
  });
  
  export const hideLoaderChirpzPost = () => ({
    type: chirpzListAction.HIDE_LOADER_CHRIPZ_POST,
  });

export default chirpzListAction;