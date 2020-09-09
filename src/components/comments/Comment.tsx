// Dependencies
import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

// Components
import CommentIndividual from "./oneComment";

// Actions
import { getComment } from "../../action/commentAction";

// Interfaces
import { IComment } from "../../interfaces";

// Types
import { MatchParams } from "../../types";

type State = {
  comment: { comment: IComment };
};

const Comment: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector((state: State) => state.comment);
  console.log(comment);

  React.useEffect(() => {
    console.log(match);

    const { id } = match.params;
    dispatch(getComment(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
