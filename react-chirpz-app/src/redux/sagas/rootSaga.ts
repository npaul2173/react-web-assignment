import { all, takeLatest } from "redux-saga/effects";

import chirpzListAction from "../actions/chirpzListActions";
import { handleChirpzList, handleChirpzListPost } from "./handlers/chirpzListSagaHandler";


export default function* rootSaga() {
  yield all([
    watchChripzListData(),
    watchChripzListPostData()
  ]);
}

export function* watchChripzListData() {
  yield takeLatest(chirpzListAction.GET_CHIRPZ_LIST, handleChirpzList);
}

export function* watchChripzListPostData() {
    yield takeLatest(chirpzListAction.GET_CHIRPZ_LIST_POST, handleChirpzListPost);
  }