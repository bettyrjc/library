// Dependencies
import * as React from "react";
import { Link } from "react-router-dom";
import img from "../../image/paper-clip.png";
const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-200 w-full h-16 flex justify-between px-4 items-center">
      <div className="flex items-center">
        <div className="w-10 h-10">
          <img src={img} alt="png" />
        </div>
        <h1 className="font-bold ">Libreria </h1>
      </div>
      <div className="flex">
        <li className="mr-2 hover:text-blue-500 cursor-pointer text-xs">
          <Link to="/usuarios">Usuario</Link>
        </li>
        <li className="mr-2 hover:text-blue-500 cursor-pointer text-xs">
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
        </li>
        <li className="mr-2 hover:text-blue-500  cursor-pointer text-xs">
          <Link to="/fotos">Fotos</Link>
        </li>
        <li className="mr-2 hover:text-blue-500 cursor-pointer text-xs">
          <Link to="/usuarios">Comentarios</Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
