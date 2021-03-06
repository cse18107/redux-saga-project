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

export const deleteUsersStart = (userId) => ({
    type:types.DELETE_USER_START,
    payload:userId
});
export const deleteUsersSuccess = (userId) => ({
    type:types.DELETE_USER_SUCCESS,
    payload:userId
});
export const deleteUsersError = (error) => ({
    type:types.DELETE_USER_ERROR,
    payload:error
});