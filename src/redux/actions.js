import * as types from "./actionTypes";

export const loadUsersStart = () => ({
    type:types.LOAD_USERS_START,
});
export const loadUsersSuccess = (users) => ({
    type:types.LOAD_USERS_SUCCESS,
    payload:users 
});
export const loadUsersError = (error) => ({
    type:types.LOAD_USERS_ERROR,
    payload:error
});
export const createUsersStart = (user) => ({
    type:types.CREATE_USERS_START,
    payload:user
});
export const createUsersSuccess = () => ({
    type:types.CREATE_USERS_SUCCESS,
});
export const createUsersError = (error) => ({
    type:types.CREATE_USERS_ERROR,
    payload:error
});