import * as actions from "../actions/index";
import { takeLatest, call, put } from "redux-saga/effects";
import * as Api from "../apis/index";

function* getUsers() {
  const response = yield call(Api.getUsers, {});
  yield put(actions.updateUsers(response.data));
}

function* getMessages() {
  const response = yield call(Api.getMessages, {});
  yield put(actions.updateMessages(response.data));
}

export function* watchDashboard() {
  yield takeLatest("GET_USERS", getUsers);
  yield takeLatest("GET_MESSAGES", getMessages);
}
