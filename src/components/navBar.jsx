import React, { useState, useEffect } from 'react'
import {account} from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'
import './navBar.css'
import logo from '../logo.gif'
const NavBar = () => {
    const navigate = useNavigate()
    const [userDetails,setUserDetails] = useState()

    useEffect(() => {
      const getData = account.get()
      getData.then(
        function(response){
          setUserDetails(response)
        },
        function(error){
          console.log(error);
        }
      )
    }, [])

    //logout button
    const logoutUser = async () => {
        try{
            await account.deleteSession('current') // current session is deleted now
            navigate("/") // where we want to redriect
        }
        catch(error){
          console.log(error);
        }
    }

    
    
  return (
    <>
      {userDetails ? (
        <>
          <div className="nav min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-lg">
            <div className='logo'>
            <img src={logo} alt="logo"/>
            </div>
            <div>
              <p className="text-xl"><strong>Hello {userDetails.name}</strong></p>
            </div>
            <div>
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
        </>
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

  )
}

export default NavBar