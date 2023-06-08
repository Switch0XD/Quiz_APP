import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo.gif";
import { AiFillHourglass } from "react-icons/ai";

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

  // logout button
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
          <nav className="flex w-screen justify-between">
            <div className="mt-6 ml-6">
              <img src={logo} alt="logo" className="w-16" />
            </div>
            <div className="flex justify-end">
              <div className="mt-6 mr-6">
                <p className="text-2xl text-white">
                  <strong>Hello, {userDetails.name}</strong>
                </p>
              </div>
              <div className="mt-6 mr-6">
                <button
                  className="w-20 bg-gray-400 text-white rounded-3xl p-1 btn-txt text-l hover:bg-slate-800 hover:drop-shadow-md ease-in-out duration-300"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
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
