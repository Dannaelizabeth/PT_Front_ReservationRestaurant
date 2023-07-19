import React,{useEffect, useState} from 'react'
import Modal from 'react-modal'
import axios from 'axios';


const ModalEditReservaion = ({  reservation, onClose, onSave }) => {
    const [user, setUser] = useState([]);
    const [date, setDate] = useState('');
    const [type, setType] = useState('')
    const [numberOfPeople,setNumberOfPeople] = useState('')
    const [ description, setDescription] = useState('')
    const [ status, setStatus] = useState('');


    useEffect (()=>{
        setDate(reservation.date);
        setType(reservation.type);
        setNumberOfPeople(reservation.numberOfPeople);
        setDescription(reservation.description)
        setStatus(reservation.status);
    },[reservation])

    const handleSave = async () => {
        try {
          // Realiza una llamada a la API para guardar los cambios en la reserva
          await axios.patch(`http://localhost:8000/reservation/${reservation.id}`, {
            date,
            type,
            numberOfPeople,
            description,
            status:true,
          });
    
          // Llama a la función onSave para actualizar el estado local o realizar las acciones necesarias
          onSave({
            ...reservation,
            date,
            type,
            numberOfPeople,
            description,
            status,
          });
        } catch (error) {
          console.error('Error al guardar la reserva:', error);
        }
      };
    
      const handleConfirm = () => {
        setStatus(true);
        handleSave();
      };
  
    return (
    <Modal isOpen={true} onRequestClose={onClose}>
    <h2>Editar Reserva</h2>
    <form>
      <div>
        <label htmlFor="date">Fecha</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e)=> setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="type">Tipo</label>
        <input
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={(e)=> setType(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="numberOfPeople">Número de Personas</label>
        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          value={numberOfPeople}
         onChange={(e)=>setNumberOfPeople(e.target.value)}
         required
        />
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
        />
      </div>
      <div>
      <button type="button" onClick={handleConfirm}>
          Confirmar
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </form>
  </Modal>
  )
}

export default ModalEditReservaion