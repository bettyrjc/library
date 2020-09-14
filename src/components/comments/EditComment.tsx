// Dependencies
import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

// Components
import Input from "../../helpers/input";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
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
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div className="p-4 border border-indigo-200 flex flex-col items-center justify-center w-100 rounded-lg">
          <div className="font-bold mb-2">Comentario</div>
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
            <div className="mx-2">
              <label htmlFor="body">Comentario</label>
              <div>
                <textarea
                  name="body"
                  id="body"
                  value={values.body}
                  onChange={handleInput}
                  className="border border-blue-700 mb-2 w-full"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Update Contact"
                className="mt-2 bg-blue-500 px-4 transition-all ease-out rounded-lg hover:shadow-lg hover:tracking-widest py-2 text-white font-bold  "
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditComment;
