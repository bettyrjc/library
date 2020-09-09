import * as React from "react";

//  Interfaces
import { IComment } from "../../interfaces";

type Props = {
  comment: IComment;
};
const oneComment: React.FC<Props> = ({ comment }) => {
  const { id, name, body, email } = comment;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 ">
            <div className="card">
              {id}
              <span className="card-title">{name}</span>
              <p className="card-content">{body}</p>
              <span>
                Para comunicarte con {name}, puedes esccribirle al {email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default oneComment;
