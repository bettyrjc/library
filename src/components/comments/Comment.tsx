import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComment } from "../../action/commentAction";
import CommentIndividual from "./oneComment";

const Comment = ({ match }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state.comment);
  console.log(comment);

  useEffect(() => {
    const { id } = match.params;
    dispatch(getComment(id));
  }, [dispatch, match.params]);

  return (
    <div>
      {
        <div>
          <Link to={`/comentarios/edit/${match.params.id}`}>
            <Button variant="contained" color="primary">
              Editar
            </Button>
          </Link>
          <CommentIndividual comment={comment} />
        </div>
      }
    </div>
  );
};

export default Comment;
