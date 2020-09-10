import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../action/userAction";

import UserCard from "./usersCard";
//  Interfaces
import { IUser } from "../../interfaces";
type State = {
  user: { users: IUser[] };
};
const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: State) => state.user);

  console.log(users);

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      {" "}
      {users.map((user) => (
        <Link to="" key={user.id}>
          <UserCard user={user} key={user.id} />
        </Link>
      ))}
    </div>
  );
};

export default Users;
