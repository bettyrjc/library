import React from "react";
//  Interfaces
import { IUser } from "../../interfaces";
type Props = {
  user: IUser;
};
const users: React.FC<Props> = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <span> numero de cliente- {id}</span>
    </div>
  );
};

export default users;
