import React, { useEffect, useState } from 'react';
import './admin-2.css'
import { DataGrid } from '@mui/x-data-grid';
import { getEmployees } from '../controller/load-data-control'

const ViewEmployees = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al obtener los empleados:', error);
        }
        };

        fetchEmployees();
    }, []);
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'nombres', headerName: 'Nombres', width: 350 },
        { field: 'apellidos', headerName: 'Apellidos', width: 350 },
        { field: 'documento', headerName: 'Documento', width: 350 },
        { field: 'direccion', headerName: 'Dirección', width: 350 },
    ];
    return (
        <div id="contenedor_principal" className="admin2-container7">
        <span className="admin2-text3">
            <span className="admin2-text4">Usuario - Empleado</span>
            <br></br>
        </span>
        <div className="admin2-container8">
            <div style={{ height: 294, width: '100%' }}>
            <DataGrid
                rows={usuarios}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 25]}
                disableSelectionOnClick
            />
            </div>
        </div>
        </div>
    )
}

export default ViewEmployees