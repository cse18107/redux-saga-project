import * as types from './actionTypes';

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

import { loadUsersSuccess,loadUsersError,createUsersSuccess,createUsersError } from "./actions";
import { loadUsersApi,createUsersApi } from './api';

export function* onLoadUsersStartAsync() {
    try{
        const response = yield call(loadUsersApi);
        if(response.status === 200){
            yield put(loadUsersSuccess(response.data));
        }
    }catch(error){
        yield put(loadUsersError(error.message));
    }
}

export function* onCreateUsersStartAsync({payload}) {
    try{
        const response = yield call(createUsersApi, payload);
        if(response.status === 200){
            yield delay(500);
            yield put(createUsersSuccess(response.data));
        }
    }catch(error){
        yield put(createUsersError(error.message));
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

export function* onCreateUser() {
    yield takeLatest(types.CREATE_USERS_START, onCreateUsersStartAsync)
}

const userSagas = [
    fork(onLoadUsers),
    fork(onCreateUser)
];

export default function* rootSaga(){
    yield all([...userSagas]);
}