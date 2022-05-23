import * as types from "./actionTypes";

import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  loadUsersSuccess,
  loadUsersError,
  createUsersSuccess,
  createUsersError,
  deleteUsersSuccess,
  deleteUsersError,
} from "./actions";
import { loadUsersApi, createUsersApi, deleteUsersApi } from "./api";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.message));
  }
}

function* onCreateUsersStartAsync({ payload }) {
  try {
    const response = yield call(createUsersApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.message));
  }
}

function* onDeleteUsersStartAsync(userId) {
  try {
    const response = yield call(deleteUsersApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUsersSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUsersError(error.message));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUser() {
  yield takeLatest(types.CREATE_USERS_START, onCreateUsersStartAsync);
}

function* onDeleteUser() {
    while(true){
        const {payload:userId} = yield take(types.DELETE_USER_START);
        yield call(onDeleteUsersStartAsync,userId);
    }
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
