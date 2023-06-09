import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import Cards from "./Ui/Cards";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //login
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/profile"); // where we want to redriect
    } catch (error) {
      console.log(error);
    }
  };

  const googleAuth = (e) => {
    e.preventDefault();
    try {
      account.createOAuth2Session('google', 'http://localhost:3000/profile', 'http://localhost:3000');
      // navigate("/profile");
    }
    catch (error) {
      console.log(error);
    }
  }
  const githubAuth = (e) => {
    e.preventDefault();
    try {
      account.createOAuth2Session('github', 'http://localhost:3000/profile', 'http://localhost:3000');
      // navigate("/profile");
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex h-screen w-screen place-content-center items-center">
      <Cards className="w-auto h-auto">
        <div className="text-l text-center font-bold pb-4 text-slate-800">
          Log in
        </div>
        <form className="pl-6 pr-6 flex flex-col" action="#" method="POST">
          {/* Email */}
          <label htmlFor="email" className="pb-1 text-slate-800">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="border-2 border-slate-800 w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
          {/* Password */}
          <label htmlFor="password" className="pt-6 text-slate-800">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="border-2 border-slate-800 w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
          {/* Signin option */}
          <div className="flex place-content-center items-center pt-6 pb-2">
            <a
              href="/signup"
              className="font-medium text-center text-gray-500 hover:text-indigo-300"
            >
              Don't have Account, Sign Up
            </a>
          </div>
          {/* Button */}
          <div>
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl p-1 btn-txt hover:bg-slate-800 hover:drop-shadow-md ease-in-out duration-300"
              onClick={loginUser}
            >
              Log in
            </button>
          </div>
        </form>

        <div className="mt-6 mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-800">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a
                href="/"
                className="w-full inline-flex justify-center py-2 px-4 text-3xl font-medium text-slate-800 hover:bg-gray-50"
              >
                <BsGoogle onClick={(e)=> googleAuth(e)} />
              </a>
            </div>

            <div>
              <a
                href="/"
                className="w-full inline-flex justify-center py-2 px-4 text-3xl font-medium text-slate-800 hover:bg-gray-50"
              >
                <BsTwitter />
              </a>
            </div>

            <div>
              <a
                href="/"
                className="w-full inline-flex justify-center py-2 px-4 text-3xl font-medium text-slate-800 hover:bg-gray-50"
              >
                <BsGithub onClick={(e)=> githubAuth(e)} />
              </a>
            </div>
          </div>
        </div>
      </Cards>
    </div>
  );
};

export default Login;
