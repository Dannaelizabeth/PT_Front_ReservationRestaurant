import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineDashboard } from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import { LogOut,reset } from '../../features/authSlice';
import "./Sidebar.scss"

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state)=> state.auth);
  
    const logout =()=>{
      dispatch(LogOut());
      dispatch(reset());
      navigate("/login");
    }
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <h2>Fast Food</h2>
                {/* <strong>{user && user.name}</strong> */}
            </div>

            <div className="menuDiv">
                <h3 className='divTitle'>
                    MENU
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <Link to='/dashboard' className='menuLink flex'>
                            <AiOutlineDashboard className='icon' />
                            <span className='smallText'>Dashboard</span>
                        </Link>
                    </li>


                </ul>
            </div>

            <div>
                <Link to='/'>
                    <button className='btn' onClick={logout}>Cerrar Sesion</button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar