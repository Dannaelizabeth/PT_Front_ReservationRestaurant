import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import images from "../../images/Family meal _Monochromatic.png"
import '../../../src/App.scss'
import Swal from 'sweetalert2';
import axios from 'axios';


const ReservationAdd = () => {
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [description, setDescription] = useState("");
    const { userId } = useParams(); 
    const navigate = useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post(`http://localhost:8000/reservation/${userId}`, {
              date,
              type,
              numberOfPeople,
              description
            });
            console.log('Reserva creada exitosamente:', response.data);
            setDate('');
            setType('');
            setNumberOfPeople('');
            setDescription('');
           
            Swal.fire({
                icon: 'success',
                title: 'Reserva exitosa',
                showConfirmButton: false,
                timer: 1500,
              });


            navigate('/');

        } catch (error) {
    console.error('Error al crear la reserva:', error);
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
                            <h3>RESERVA CON NOSOTROS</h3>
                        </div>

                        <form onSubmit={handleSubmit} className='form grid'>
                            <span>Completa el siguiente Formulario</span>
                            <div className="inputDiv">
                                <label htmlFor='date'>Fecha de Reservacion</label>
                                <div className="input flex">
                                    <input type="date" 
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="inputDiv">

                                <label htmlFor='type'>Tipo de Reserva </label>
                                <select
                                    id='type'
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option>Selecciona</option>
                                    <option value="cena">Cena</option>
                                    <option value="almuerzo">Almuerzo</option>
                                    <option value="onces">Onces</option>
                                    <option value="cumpleanos">Cumpleaños</option>
                                    <option value="especial">Ocasion Especial</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor='numberOfPeople'>Cantidad de Personas</label>
                                <div className="input flex">
                                    <input
                                        type='numberOfPeople'
                                        id='numberOfPeople'
                                   
                                        value={numberOfPeople}
                                        onChange={(e) => setNumberOfPeople(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className="inputDiv">
                                <label htmlFor='description'>Descripcion</label>
                                <div className="input flex">
                                    
                                    <input type='description' placeholder='Ingrese Observacion'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                </div>
                            </div>
                            <div>
                                <button type='submit' className='btn flex'>
                                    <span>Reservar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationAdd