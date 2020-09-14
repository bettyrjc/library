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
      <div className="mb-2 p-4 border rounded-lg">
        <div>
          <h2 className="font-bold">{name}</h2>
          <div className="ml-2">
            <p>{body}</p>
            <span className="text-xs text-blue-700">{email}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default getAllComment;
