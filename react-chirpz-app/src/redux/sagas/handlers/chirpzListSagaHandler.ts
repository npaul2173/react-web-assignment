import { put } from "redux-saga/effects";
import {
  setChirpzListData,
  setChirpzListDataPost,
  setLoaderChirpzPost,
  hideLoaderChirpzPost,
} from "../../actions/chirpzListActions";
import fetchAPIServices from "../../../services/fetchAPIServices";
import {
  getChirpzListApi,
  postChirpzListApi,
} from "../../../services/endPoints";

export function* handleChirpzList(action: any): any {
  try {
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(getChirpzListApi);

    if (response) {
      yield put(setChirpzListData(response));
    } else {
      yield put(setChirpzListData({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleChirpzListPost(action: any): any {
  try {
    yield put(setLoaderChirpzPost());
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(postChirpzListApi, action.payload);

    if (response) {
      yield put(setChirpzListDataPost(response));
    } else {
      yield put(setChirpzListDataPost({}));
    }
    yield put(hideLoaderChirpzPost());
  } catch (error) {
    yield put(hideLoaderChirpzPost());
    console.log(error);
  }
}
