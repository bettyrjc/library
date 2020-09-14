// Dependencies
import * as React from "react";
import { Link } from "react-router-dom";
import img from "../../image/paper-clip.png";
const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-400 text-white w-full h-16 flex justify-between px-4 items-center">
      <Link to="/" className="flex items-center">
        <div className="w-10 h-10  ">
          <img src={img} alt="png" />
        </div>
        <h1 className="font-bold hidden  md:block ">Libreria </h1>
      </Link>
      <div className="flex">
        <li className="mr-2 hover:text-blue-500 cursor-pointer text-xs">
          <Link to="/usuarios">Usuario</Link>
        </li>
        <li className="mr-2 hover:text-blue-500  cursor-pointer text-xs">
          <Link to="/fotos">Fotos</Link>
        </li>
        <li className="mr-2 hover:text-blue-500 cursor-pointer text-xs">
          <Link to="/comentarios">Comentarios</Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
