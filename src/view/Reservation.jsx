import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import images from "../images/Family meal _Monochromatic.png"
import { FaRegEnvelope } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa'
import { LoginUser, reset } from "../features/authSlice";
import '../../src/App.scss'
import Swal from 'sweetalert2';
import axios from 'axios';
import ReservationAdd from "../components/ReservationAdd/ReservationAdd";

const Reservation = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [typeIdentification, setTypeIdentification] = useState('');
    const [Identification, setIdentification] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
           const response = await axios.post('http://localhost:8000/users', {
                name,
                lastName,
                typeIdentification,
                Identification,
                email,
                password:password,
            });
            console.log('usuario creado exitosamente');
            const userId = response.data.id;
            setUserId(userId);
            console.log(userId)
            // Limpiar los campos del formulario
            setName('');
            setLastName('');
            setTypeIdentification('');
            setIdentification('');
            setEmail('');

            navigate(`/reservation/add/${userId}`);
 
        } catch (error) {
            console.error('Error al crear el componente:', error);
        }
    }

    return (
        <div>
            <div className='loginPage flex'>
                <div className="container flex">
                    <div className="imageDiv">
                        <img src={images} />

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

                        <form onSubmit={handleSubmit} className='form grid'>
                            <span>Haz tu reservacion!</span>
                            <div className="inputDiv">
                                <label htmlFor='text'>Nombre</label>
                                <div className="input flex">
                                    <FaRegEnvelope className='icon' />
                                    <input type="text" placeholder='Ingrese su nombre'
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                    />

                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor='text'>Apellido</label>
                                <div className="input flex">
                                    <FaRegEnvelope className='icon' />
                                    <input type='text' placeholder='Ingrese su Apellido'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />

                                </div>
                            </div>
                            <div className="input-div">
                                <div className="input-group">
                                    <div className="input">
                                        <label htmlFor='tipoDocumento'>Tipo </label>
                                        <select
                                            id='tipoDocumento'
                                        value={typeIdentification}
                                        onChange={(e) => setTypeIdentification(e.target.value)}
                                        >
                                            <option value="Rif">RIF</option>
                                            <option value="Cedula">Cedula</option>
                                            <option value="Pasaporte">Pasaporte</option>
                                        </select>
                                    </div>

                                    <div className="inputDiv">
                                        <label htmlFor='documento'>Documento</label>
                                        <div className="input flex">
                                            <input
                                                type='text'
                                                id='documento'
                                                placeholder='Ingrese su documento'
                                             value={Identification}
                                            onChange={(e) => setIdentification(e.target.value)}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor='email'>Correo</label>
                                <div className="input flex">
                                    <FaRegEnvelope className='icon' />
                                    <input type='email' placeholder='Ingrese su correo'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div>
                            </div>
                            <div>
                                <button type='submit' className='btn flex'>
                                    <span>Continuar</span>
                                </button>
                            </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reservation