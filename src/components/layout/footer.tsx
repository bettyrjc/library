// Dependencies
import * as React from "react";
import { Link } from "react-router-dom";
import img from "../../image/paper-clip.png";
const Footer: React.FC = () => {
  return (
    <div className="bg-blue-800 text-white w-full h-16 flex justify-between px-4 items-center">
      <div className="w-10 h-10  ">
        <img src={img} alt="png" />
      </div>
    </div>
  );
};
export default Footer;
