// helper
import { LOADING, END_LOADING } from "./types";

export const Loading = (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const removeLoading = (dispatch) => {
  dispatch({
    type: END_LOADING,
  });
};
