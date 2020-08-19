import {
  GET_COMMENTS,
  GET_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  LOADING,
  END_LOADING,
} from "../action/types";

const initialState = {
  loading: false,
  comments: [],
  comment: {},
};
// payload: es la data que quieres pasar a tu action
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id
            ? (comment = action.payload)
            : comment
        ),
      };
    default:
      return state;
  }
}
