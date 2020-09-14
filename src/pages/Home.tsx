// Dependencies
import * as React from "react";

// componentes
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

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
        <div className="mt-4">
          {/*  */}
          <div className="lg:flex  justify-around items-center  lg:h-100  bg-gradient-to-r from-gray-200 via-blue-300 to-blue-500 p-4">
            <div className="flex  flex-col-reverse md:flex-row justify-end items-center mt-2 w-full">
              <div className="z-10 relative w-full -mt-10 md:w-64 md:mt-0  bg-white absolute-55  p-4 text-sm shadow-lg  rounded-lg">
                <h3 className="font-bold border-solid border-b-2 border-blue-400 mb-2 pb-2">
                  Harry potter y la piedra filosofal
                </h3>
                <p className="text-sm">
                  Is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="mr-2 md:w-64 h-80 relative">
                <img
                  className="w-full h-full"
                  src="https://covers.alibrate.com/b/59872e9ccba2bce50c1cbcd7/34fe7d67-f9d6-421c-85f6-6ebc81532936/share"
                  alt="img"
                />
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col-reverse md:flex-row justify-end items-center mt-2 w-full">
              <div className="z-10 relative w-full -mt-10 md:w-64 md:mt-0  bg-white absolute-55 p-4 text-sm shadow-lg rounded-lg">
                <h3 className="font-bold border-solid border-b-2 border-blue-400 mb-2 pb-2">
                  Harry potter y la piedra filosofal
                </h3>
                <p className="text-sm">
                  Is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="mr-2 md:w-64 h-80 relative">
                <img
                  className="w-full h-full"
                  src="https://covers.alibrate.com/b/59872e9ccba2bce50c1cbcd7/34fe7d67-f9d6-421c-85f6-6ebc81532936/share"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between  items-center flex-col md:flex-row h-full overflow-x-auto">
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
      </div>

      <Footer />
    </>
  );
};

export default Home;
