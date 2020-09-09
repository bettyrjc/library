// Dependencies
import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//  Interfaces
import { IComment } from "../../interfaces";

type Props = {
  comment: IComment;
};

const getAllComment: React.FC<Props> = ({ comment }) => {
  const { id, body, name, email } = comment;
  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div>
              <h2 className="card-title">Comento: {name}</h2>
              <span> Comentario numero: {id}</span>
              <div className="card-content">
                <p>{body}</p>
              </div>
              <div className="card-action">
                <Link to="#">{email}</Link>
              </div>
            </div>

            <div style={{ float: "right", marginRight: "1rem" }}>
              <Link to={`comentarios/${id}`}>
                <Button variant="contained" color="primary">
                  Delete
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default getAllComment;
