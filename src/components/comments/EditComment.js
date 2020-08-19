import React, { useEffect, useState, useMemo } from "react";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from "react-redux";
import { updateComment, getComment } from "../../action/commentAction";

import Input from "../../helpers/input";
import { useForm } from "../customHooks/useForm";

const EditComment = ({ match, history }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state.comment);
  // const [values, setValues] = useState(comment);
  const [values, handleInput] = useForm(comment);

  // const handleInput = (event) => {
  //   let { name, value } = event.target;
  //   setValues({ ...values, [name]: value });
  // };
  console.log(values);

  // const statee = useMemo(() => comment, [comment]);
  // console.log('esate', statee);

  useEffect(() => {
    const { id } = match.params;
    dispatch(getComment(id));
  }, [dispatch, match.params]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const { id } = match.params;

    dispatch(updateComment(id, values, history));
  };
  return (
    <div className="card col s12">
      <div className="card-title">Formulario</div>
      <div className="card-content">
        <form onSubmit={handleUpdate}>
          <Input
            id="name"
            label="Name"
            value={values.name}
            active_label={true}
            onChange={handleInput}
          />
          <Input
            id="email"
            label="Correo"
            value={values.email}
            type="email"
            active_label={true}
            onChange={handleInput}
          />
          <Input
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
