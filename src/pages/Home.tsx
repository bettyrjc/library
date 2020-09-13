// Dependencies
import * as React from "react";

// componentes
import Navbar from "../components/layout/navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-100  ">
        <img
          className="h-100 w-full block"
          src="https://espacio.fundaciontelefonica.com/wp-content/uploads/2016/03/portada-libros.jpg"
          alt="banner"
        />
      </div>
      {/*  */}
      <div className=" block mx-10">
        <div className=" bg-blue-200 flex justify-between  items-center flex-col md:flex-row h-full overflow-x-auto">
          <div className="h-48  w-48 p-2 ">
            <div className="h-40  w-full md:w-40 bg-gray-200   hover:shadow-lg p-2 rounded-full flex flex-col align-center justify-between">
              <img
                className="w-full h-full p-4"
                src="https://www.flaticon.com/svg/static/icons/svg/3237/3237752.svg"
                alt="libreta"
              />
            </div>
          </div>
          {/*  */}
          <div className="h-48 w-48 p-2">
            <div className="h-40  w-full md:w-40 bg-gray-200  hover:shadow-lg p-2 rounded-full flex flex-col align-center justify-between">
              <img
                className="w-full h-full p-4"
                src="https://www.flaticon.com/svg/static/icons/svg/3237/3237749.svg"
                alt="libreta"
              />
            </div>
          </div>
          {/*  */}
          <div className="h-48 w-48 p-2">
            <div className="h-40  hover:shadow-lg  w-full md:w-40 bg-gray-200  p-2 rounded-full flex flex-col align-center justify-between">
              <img
                className="w-full h-full p-4"
                src="https://www.flaticon.com/svg/static/icons/svg/3237/3237838.svg"
                alt="libreta"
              />
            </div>
          </div>
          {/*  */}
          <div className="h-48 w-48 p-2">
            <div className="h-40  hover:shadow-lg  w-full md:w-40 bg-gray-200  p-2 rounded-full flex flex-col align-center justify-between">
              <img
                className="w-full h-full p-4"
                src="https://www.flaticon.com/svg/static/icons/svg/3237/3237827.svg"
                alt="libreta"
              />
            </div>
          </div>
          {/*  */}
          <div className="h-48 w-48 p-2">
            <div className="h-40 hover:shadow-lg w-full md:w-40 bg-gray-200  p-2 rounded-full flex flex-col align-center justify-between">
              <img
                className="w-full h-full p-4"
                src="https://www.flaticon.com/svg/static/icons/svg/3237/3237867.svg"
                alt="libreta"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="">Lo mas vendido</h1>
          <div className="flex bg-red-400">
            <div className="border-red-800 border-solid md:flex mt-2">
              <div className="mr-2">
                <img
                  className="w-32 h-48"
                  src="https://covers.alibrate.com/b/59872e9ccba2bce50c1cbcd7/34fe7d67-f9d6-421c-85f6-6ebc81532936/share"
                  alt="img"
                />
              </div>
              <p className="w-64 bg-orange-400">
                Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </>
  );
};

export default Home;
