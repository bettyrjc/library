import * as React from "react";
import { useDispatch } from "react-redux";

// Components
import { IForm } from "../../interfaces";

import Input from "../../helpers/input";
import { useForm } from "../customHooks/useForm";
import { addUser } from "../../action/userAction";

interface IFormHook extends IForm {
  values: {
    name: string;
    email: string;
  };
}

const initialState = {
  name: "",
  email: "",
};

const AddUser: React.FC = () => {
  const { values, handleInput } = useForm(initialState) as IFormHook;
  const dispatch = useDispatch();

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser(values));
  };

  const { name, email } = values;

  return (
    <form onSubmit={handleAddUser}>
      <Input
        id="name"
        name="name"
        label="Name"
        placeholder="Nombre"
        value={name}
        active_label={true}
        onChange={handleInput}
      />
      <Input
        id="email"
        name="email"
        label="Correo"
        placeholder="correo"
        value={email}
        type="email"
        active_label={true}
        onChange={handleInput}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default AddUser;
