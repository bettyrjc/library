import {
  GET_USERS,
  GET_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from "./types";
import axios from "axios";
import { Loading, removeLoading } from "./helperAction";

export const getUsers = () => async (dispatch) => {
  Loading(dispatch);
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
    removeLoading(dispatch);
  } catch (err) {
    console.log(err);
    removeLoading(dispatch);
  }
};
export const getUser = (id) => async (dispatch) => {
  Loading(dispatch);
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    removeLoading(dispatch);
  } catch (err) {
    console.log(err);
    removeLoading(dispatch);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    removeLoading(dispatch);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  }
};

export const addUser = (contact) => async (dispatch) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({
    type: ADD_USER,
    payload: res.data,
  });
};

export const updateUser = (id, user, history) => async (dispatch) => {
  Loading(dispatch);
  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      user
    );
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
    removeLoading(dispatch);
    history.push("/usuarios");
  } catch (err) {
    removeLoading(dispatch);
    console.log("error");
  }
};
