import React from "react";
//  Interfaces
import { IUser } from "../../interfaces";
type Props = {
  user: IUser;
};
const users: React.FC<Props> = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div className="border border-blue-600 p-4 my-4 mb-2 w-80">
      <h2 className="font-bold text-blue-800">{name}</h2>
      <div className="md:flex">
        <p className="font-medium">{email}</p>
        <span> numero de cliente- {id}</span>
      </div>
    </div>
  );
};

export default users;
