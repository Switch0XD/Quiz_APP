import React, { useState, useEffect } from 'react'
import {account} from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'


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
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-blue-900 text-white p-1 rounded-md"
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