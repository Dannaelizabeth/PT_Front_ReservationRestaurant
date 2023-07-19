import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import Body from '../components/Body/Body'
import Sidebar from '../components/Sidebar/Sidebar'
import '../../src/App.scss'

const Dashboard = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isError} = useSelector((state)=> state.auth);

  useEffect(() => {
    dispatch(getMe());
    
  }, [dispatch])

  useEffect(() => {
    if (isError){
      navigate("/login")
    }
    
  }, [isError, navigate])
  return (
    <div className='dashboard flex'>
        <div className="dashboardContainer flex">
        <Sidebar />
        <Body />
        </div>
      
    </div>
  )
}

export default Dashboard