import React, { useState, useEffect } from 'react'
import {account} from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'
import TodoForm from './TodoForm'
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