// Dependencies
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// actions
import { getUsers } from "../../action/userAction";
// components
import UserCard from "./usersCard";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
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
    <>
      <Navbar />
      <div className="text-indigo-700 p-4">
        <div className="font-bold">Clientes estrellas </div>
        {users.map((user) => (
          <Link to="" key={user.id}>
            <UserCard user={user} key={user.id} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Users;
