import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react';
import '../employee/css/empleado-3.css'
import { DataGrid } from '@mui/x-data-grid';
import { getAspirantUsers, getCompanieUsers } from '../../controller/load-data-control';

const Empleado3 = (props) => {

  const [usuariosEmpresa, setUsuariosEmpresa] = useState(null);


  useEffect(() => {
    const fetchEmployees = async () => {
        try {
            const data = await getAspirantUsers();
            setUsuariosEmpresa(data);

        } catch (error) {
            console.error('Error al eliminar empleado:', error);
        }
    };

    fetchEmployees();
  }, []);
  if (!usuariosEmpresa) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }
  const columns = [
    { field: 'idPostulado', headerName: 'ID', width: 100 },
    { field: 'nombre', headerName: 'Nombres', width: 250 },
    { field: 'apellidos', headerName: 'Telefono', width: 250 },
    { field: 'telefono', headerName: 'NIT', width: 250 },
    { field: 'documento', headerName: 'Dirección', width: 300 },
  ];

  return (
    <div id="contenedor_principal" className="empleado3-container7">
      <span className="empleado3-text3">
        <span className="empleado3-text4">Cliente - Postulado</span>
        <br></br>
      </span>
      <div className="admin2-container8">
            <div style={{ height: 294, width: '100%' }}>
                <DataGrid
                    rows={usuariosEmpresa}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 25]}
                    disableSelectionOnClick
                    getRowId={(row) => row.idPostulado}
                />
            </div>
      </div>

    </div>
  )
}
export default Empleado3
