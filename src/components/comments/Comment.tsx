// Dependencies
import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import CommentIndividual from "./oneComment";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
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
    <div className="h-full">
      <Navbar />
      <div className="h-screen">
        {
          <div className="flex items-center flex-row-reverse m-4 m2">
            <Link
              className="bg-blue-500 px-4 transition-all ease-out rounded-lg hover:shadow-lg hover:tracking-widest py-2 text-white font-bold "
              to={`/comentarios/edit/${match.params.id}`}
            >
              Editar
            </Link>
            <CommentIndividual comment={comment} />
          </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default Comment;
