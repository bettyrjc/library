// Dependencies
import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

// Components
import Input from "../../helpers/input";

// Actions
import { updateComment, getComment } from "../../action/commentAction";
import { useForm } from "../customHooks/useForm";

// Interfaces
import { IComment, IForm } from "../../interfaces";

// Types
import { MatchParams } from "../../types";

type State = {
  comment: { comment: IComment };
};

interface IFormHook extends IForm {
  values: {
    name: string;
    body: string;
    email: string;
  };
}

const EditComment: React.FC<RouteComponentProps<MatchParams>> = ({
  match,
  history,
}) => {
  const dispatch = useDispatch();
  const { comment } = useSelector((state: State) => state.comment);
  const { values, handleInput } = useForm(comment) as IFormHook;

  React.useEffect(() => {
    const { id } = match.params;
    dispatch(getComment(id));
  }, [dispatch, match.params]);

  React.useEffect(() => {
    localStorage.setItem("state", JSON.stringify(values));
  }, [values]);

  React.useEffect(() => {
    const { id } = match.params;
    dispatch(getComment(id));
  }, [dispatch, match.params]);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id } = match.params;
    dispatch(updateComment(id, values, history));
    localStorage.removeItem("state");
  };

  return (
    <div className="card col s12">
      <div className="card-title">Formulario</div>
      <div className="card-content">
        <form onSubmit={handleUpdate}>
          <Input
            name="name"
            id="name"
            label="Name"
            value={values.name}
            active_label={true}
            onChange={handleInput}
          />
          <Input
            name="email"
            id="email"
            label="Correo"
            value={values.email}
            type="email"
            active_label={true}
            onChange={handleInput}
          />
          <Input
            name="body"
            id="body"
            label="Comentario"
            value={values.body}
            active_label={true}
            onChange={handleInput}
          />

          <input
            type="submit"
            value="Update Contact"
            className="btn btn-light btn-block indigo"
          />
        </form>
      </div>
    </div>
  );
};

export default EditComment;
