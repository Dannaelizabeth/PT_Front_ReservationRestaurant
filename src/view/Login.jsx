import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from 'react-router-dom'
import image from "../images/Fast food_Isometric.png"
import {FaRegEnvelope} from 'react-icons/fa'
import {FaRegEyeSlash} from 'react-icons/fa'
import { LoginUser, reset } from "../features/authSlice";
import '../../src/App.scss'
import Swal from 'sweetalert2';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
      (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
          navigate("/dashboard");
    
        }
        dispatch(reset());
      }, [user, isSuccess, dispatch, navigate]);
    
      const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
      };

      useEffect(() => {
        if (isError) {
          Swal.fire({
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: message,
          });
        } else if (user || isSuccess) {
          navigate('/dashboard');
        }
        dispatch(reset());
      }, [user, isSuccess, isError, dispatch, navigate]);
  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="imageDiv">
                <img src={image}/>

                <div className="footerDiv flex">
                    <Link to='/'>
                    <button className='btn'>Regresar</button>
                    </Link>
                </div>

            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <h3>Bienvenido Fast Food</h3>
                </div>

                <form onSubmit={Auth} className='form grid'>
                    <span>Inicie Session</span>
                    <div className="inputDiv">
                        <label htmlFor='email'>Correo</label>
                        <div className="input flex">
                            <FaRegEnvelope className='icon'/>
                            <input type='email' placeholder='Ingrese su correo'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />

                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor='password'>Contrase;a</label>
                        <div className="input flex">
                            <FaRegEyeSlash className='icon'/>
                            <input type='password' 
                            placeholder='Ingrese su contrase;a' 
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />

                        </div>
                    </div>
                    <div>
                    <button type='submit' className='btn flex'>
                        <span>Entrar</span>
                    </button>
                    </div>

                  

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login