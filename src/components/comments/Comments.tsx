//  Dependecies
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Comment from "./getAllComment";

// Actions
import { getComments } from "../../action/commentAction";

//  Interfaces
import { IComment } from "../../interfaces";

type State = {
  comment: { comments: IComment[] };
};

const Comments: React.FC = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state: State) => state.comment);

  React.useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <div className="bg-red-500 m-4">
      {comments.map((comment) => (
        <Link to={`/comentarios/${comment.id}`} key={comment.id}>
          <Comment comment={comment} />
        </Link>
      ))}
    </div>
  );
};

export default Comments;
