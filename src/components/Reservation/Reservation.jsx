import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Reservation.scss'
import ModalEditReservaion from '../ReservationAdd/ModalEditReservaion';

const Reservation = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [showModal, setShowModal] = useState(false);



    const handleEditReservation = (reservation) => {
      setSelectedReservation(reservation);
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setSelectedReservation(null);
      setShowModal(false);
    };
  
    const handleModalSave = () => {
      fetchData();
      handleModalClose();
    };


  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/reservation');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    const filteredResults = data.filter(
      (item) =>
        item.user.name.toLowerCase().includes(keyword) ||
        item.user.lastName.toLowerCase().includes(keyword) ||
        item.user.email.toLowerCase().includes(keyword)
    );
    setFilteredData(filteredResults);
  };
  

  const transformStatus = (status) => {
    return status ? 'Confirmado' : 'Pendiente';
  };

  const columns = [

    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
        name: 'Usuario',
        selector: 'user.name',
        sortable: true,
    },
    {
        name: 'Apellido',
        selector: 'user.lastName',
        sortable: true,
    },
    {
        name: 'Tipo de Documento',
        selector: 'user.typeIdentification',
        sortable: true,
      },
      {
        name: 'Identificacion',
        selector: 'user.Identification',
        sortable: true,
      },
      {
        name: 'Email',
        selector: 'user.email',
        sortable: true,
      },
    {
      name: 'Fecha',
      selector: 'date',
      sortable: true,
    },
    {
      name: 'Tipo',
      selector: 'type',
      sortable: true,
    },
    {
      name: 'Número de Personas',
      selector: 'numberOfPeople',
      sortable: true,
    },
    {
      name: 'Estado',
      selector: 'status',
      cell: (row) => transformStatus(row.status),
      sortable: true,
    },
    {
        name: 'Acciones',
        cell: (row) => <button className='btn' onClick={() => handleEditReservation(row)}>Editar</button>,
      }
    
  ];

  const dataToDisplay = filteredData.length > 0 ? filteredData : data.filter(
    (item) =>
      item.user.name.toLowerCase().includes(searchTerm) ||
      item.user.lastName.toLowerCase().includes(searchTerm) ||
      item.user.email.toLowerCase().includes(searchTerm)
  );
  
  return (
    <div className="datatable-container">
        <div className="search-container">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleFilter} />
      </div>
          <DataTable
        className="datatable"
        columns={columns}
        data={dataToDisplay}
        noHeader
        pagination
        highlightOnHover
      />

{showModal && (
        <ModalEditReservaion
          reservation={selectedReservation}
          onClose={handleModalClose}
          onSave={handleModalSave}
        />
      )}
    </div>
  )
}

export default Reservation