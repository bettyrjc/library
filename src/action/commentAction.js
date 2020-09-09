import axios from "axios";
import {
  GET_COMMENTS,
  GET_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from "./types";

import { Loading, removeLoading } from "./helperAction";

export const getComments = () => async (dispatch) => {
  Loading(dispatch);
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
    removeLoading(dispatch);
  } catch (err) {
    removeLoading(dispatch);
    console.log("error");
  }
};

export const getComment = (id) => async (dispatch) => {
  Loading(dispatch);
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    dispatch({
      type: GET_COMMENT,
      payload: res.data,
    });
    removeLoading(dispatch);
  } catch (err) {
    removeLoading(dispatch);
    console.log(err);
  }
};
export const deleteComment = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COMMENT,
      payload: id,
    });
  }
};

export const addComment = (comment, history) => async (dispatch) => {
  Loading(dispatch);
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/comments",
      comment
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    removeLoading(dispatch);
    history.push("/comentarios");
  } catch {
    removeLoading(dispatch);
    console.log("error");
  }
};

export const updateComment = (id, comment, history) => async (dispatch) => {
  Loading(dispatch);
  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      comment
    );
    dispatch({
      type: UPDATE_COMMENT,
      payload: res.data,
    });
    removeLoading(dispatch);
    history.push("/comentarios");
  } catch (err) {
    removeLoading(dispatch);
    console.log(err);
  }
};
