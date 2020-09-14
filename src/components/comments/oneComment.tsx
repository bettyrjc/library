import * as React from "react";

//  Interfaces
import { IComment } from "../../interfaces";

type Props = {
  comment: IComment;
};
const oneComment: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;
  return (
    <div className="m-6">
      <span className="font-bold mb-6">{name}</span>
      <p className="card-content">{body}</p>
      <span className="mt-2">
        Para comunicarte con{" "}
        <span className="font-bold text-indigo-600">{name}</span>, puedes
        esccribirle al <span className="text-indigo-600"> {email}</span>
      </span>
    </div>
  );
};

export default oneComment;
