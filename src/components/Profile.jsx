import React from 'react'
import { useNavigate} from 'react-router-dom'
import Todos from './Todos'
import NavBar from './navBar'
const Profile = () => {
    const navigate = useNavigate()
  return (
    <>
      <NavBar />
      <Todos />
    </>
  )
}

export default Profile