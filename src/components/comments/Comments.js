import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../action/commentAction";
import Comment from "./getAllComment";
import { Link } from "react-router-dom";
const Comments = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <div>
      {comments.map((comment) => (
        <Link to={`/comentarios/${comment.id}`} key={comment.id}>
          <Comment comment={comment} />
        </Link>
      ))}
    </div>
  );
};

export default Comments;
