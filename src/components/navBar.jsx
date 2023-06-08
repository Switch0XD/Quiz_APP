import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo.gif";
const NavBar = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  //logout button
  const logoutUser = async () => {
    try {
      await account.deleteSession("current"); // current session is deleted now
      navigate("/"); // where we want to redriect
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <div>
          <div className="nav min-h-min max-w-7xl mx-auto flex justify-between text-center py-4 px-4">
            <div className="w-[3.5rem]">
              <img src={logo} alt="logo" className="rounded-full" />
            </div>
            <div className="flex justify-between text-center place-content-center w-auto h-12 bg-orange-500 px-4 rounded-3xl border-4">
              <p className="text-3xl text-white bold">
                Hello, {userDetails.name}
              </p>
            </div>
            <div>
              <button
                className="w-20 bg-gray-400 text-white rounded-3xl p-1 btn-txt hover:bg-slate-800 hover:drop-shadow-md ease-in-out duration-300"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
};

export default NavBar;
