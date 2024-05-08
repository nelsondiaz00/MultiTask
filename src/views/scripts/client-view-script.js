import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../employee/css/empleado-2.css'
import { getCompanieUsers } from '../../controller/load-data-control';

const Empleado2 = (props) => {
  const [usuariosEmpresa, setUsuariosEmpresa] = useState(null);


  useEffect(() => {
    const fetchEmployees = async () => {
        try {
            const data = await getCompanieUsers();
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
    { field: 'idEmpresa', headerName: 'ID', width: 100 },
    { field: 'nombre_Empresa', headerName: 'Nombres', width: 250 },
    { field: 'telefono', headerName: 'Telefono', width: 250 },
    { field: 'nit', headerName: 'NIT', width: 250 },
    { field: 'direccion', headerName: 'Dirección', width: 300 },
  ];
  console.log(usuariosEmpresa, " USUSUARIOS EMPRESA!")
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
                    getRowId={(row) => row.idEmpresa}
                />
            </div>
      </div>

    </div>
  )
}
export default Empleado2
