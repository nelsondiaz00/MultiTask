import React, { useEffect, useState } from 'react';
import '../admin/css/admin-2.css'
import { DataGrid } from '@mui/x-data-grid';
import { getEmployees, updatePopUpEdit } from '../../controller/load-data-control'
import { deleteEmployee } from '../../controller/create-control';
import { updateProfile, updateProfileTemp } from '../../controller/update-profile-control';

const ViewEmployees = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getEmployees();
                setUsuarios(data);
    
            } catch (error) {
                console.error('Error al eliminar empleado:', error);
            }
        };

        fetchEmployees();
    }, []);

    const getSVG = (valor) => {
        console.log('Valor de activo:', valor);

        if (valor === 0) {
            return (
                <div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="contenedores-de-modales-de-admin-icon12"
                    >
                        <path d="M512 704q-44 0-84 22l-22-24q-2-2-22-24 56-38 128-38 68 0 128 38-4 2-23 23t-21 25q-38-22-84-22zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM298 406q0-26 19-45t45-19 45 19 19 45-19 45-45 19-45-19-19-45zM598 406q0-26 19-45t45-19 45 19 19 45-19 45-45 19-45-19-19-45z"></path>
                    </svg>
                </div>
            );
        } else if (valor === 1) {
            return (
                <div>
                    
                    <svg
                        viewBox="0 0 1024 1024"
                        className="contenedores-de-modales-de-admin-icon14"
                    >
                        <path d="M512 746q-74 0-133-41t-85-107h70q50 84 148 84t148-84h70q-26 66-85 107t-133 41zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM362 470q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zM662 470q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19z"></path>
                    </svg>
                </div>
            );
        } else {
            return null;
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'nombres', headerName: 'Nombres', width: 250 },
        { field: 'apellidos', headerName: 'Apellidos', width: 250 },
        { field: 'documento', headerName: 'Documento', width: 250 },
        { field: 'direccion', headerName: 'Dirección', width: 300 },
        {field: 'activo', headerName: 'Activo', width: 150, renderCell: (params) => getSVG(params.value) },
    ];

    const handleRowSelectionModelChange = (newSelection) => {
        setSelectedRows(newSelection);
        localStorage.setItem('idRowSelected', newSelection);
        console.log("Datos de la fila seleccionada:", newSelection);
    };
    const deleteUser = () => {
        const deleteEmployeeConst = async () => {
            try {
                const data = await deleteEmployee();
                console.log(data);
                return data;
            } catch (error) {
                console.error('Error al eliminar empleados:', error);
            }
        };
    
        deleteEmployeeConst();
    };

    const [showPopup, setShowPopup] = useState(false);
    const [showPopupEditUser, setShowPopupEditUser] = useState(false);

    const handleMostrar = async () => {
        if (selectedRows.length > 0) {
            setShowPopupEditUser(true);
            const data = await updatePopUpEdit(selectedRows);
            if (data) {
                const nameInput = document.getElementById("input_nombres");
                const lastNameInput = document.getElementById("input_apellidos");
                const addressInput = document.getElementById("input_direccion");
                const userNameInput = document.getElementById("input_username");
                const emailInput = document.getElementById("input_correo");
                // const passwordInput = document.getElementById("input_contraseña");
                const phoneInput = document.getElementById("input_numero");
                const password = document.getElementById("input_contrasena");
                
    
                nameInput.value = data.nombre;
                lastNameInput.value = data.apellidos;
                addressInput.value = data.direccion;
                userNameInput.value = data.nUsuario;
                phoneInput.value = data.telefono;
                emailInput.value = data.correo;
                password.value = data.password;
            } else {
                console.error('No se pudo obtener la información del empleado.');
            }
        }
    };
    
    const handleCancelarMostrar = () => {
        setShowPopupEditUser(false);
    };

    const handleEliminarUsuario = () => {
        if(selectedRows.length > 0){
            setShowPopup(true);
        }
    };

    

    const handleConfirmar = async () => {
        setShowPopup(false);
        await deleteUser();
        try {
            const data = await getEmployees();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al eliminar empleado:', error);
        }
    };
    
    
    const handleCancelar = () => {
        setShowPopup(false);
    };

    const handleUpdateProfile = async () => {
        setShowPopupEditUser(false);
        await updateProfileTemp();
        try {
            const data = await getEmployees();
            setUsuarios(data);
            
        } catch (error) {
            console.error('Error al updatear empleado', error);
        }
    };

    const usuariosFiltrados = usuarios.filter(usuario => usuario.belonging !== 0);

    return (
        <div id="contenedor_principal" className="admin2-container7">
        <span className="admin2-text3">
            <span className="admin2-text4">Usuario - Empleado</span>
            <br></br>
        </span>
        <div className="admin2-container8">
            <div style={{ height: 294, width: '100%' }}>
                <DataGrid
                    rows={usuariosFiltrados}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 25]}
                    disableSelectionOnClick
                    onRowSelectionModelChange={handleRowSelectionModelChange}                
                />
            </div>
        </div>
    </div>
    )
}

export default ViewEmployees