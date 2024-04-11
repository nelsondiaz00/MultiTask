import React, { useEffect, useState } from 'react';
import '../admin/css/admin-2.css'
import { DataGrid } from '@mui/x-data-grid';
import { getEmployees, updatePopUpEdit } from '../../controller/load-data-control'
import { deleteEmployee } from '../../controller/create-user-control';
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
    
                nameInput.value = data.nombre;
                lastNameInput.value = data.apellidos;
                addressInput.value = data.direccion;
                userNameInput.value = data.nUsuario;
                phoneInput.value = data.telefono;
                emailInput.value = data.correo;
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
            {showPopupEditUser && <div className="popup-overlay" />}
            {showPopupEditUser && (
            <div className="popup2"> 
            <div
                id="contenedor_editaremp"
                className="contenedores-de-modales-de-admin-container09"
            >
                <div className="contenedores-de-modales-de-admin-container10">
                <span className="contenedores-de-modales-de-admin-text04">
                    Editar empleado
                </span>
                </div>
                <div className="contenedores-de-modales-de-admin-container11">
                <div className="contenedores-de-modales-de-admin-container12">
                    <span className="contenedores-de-modales-de-admin-text05">
                    Nombres
                    </span>
                    <input
                    type="email"
                    id="input_nombres"
                    className="contenedores-de-modales-de-admin-textinput input"
                    />
                </div>
                <div className="contenedores-de-modales-de-admin-container13">
                    <span className="contenedores-de-modales-de-admin-text06">
                    <span>Apellidos</span>
                    <br></br>
                    </span>
                    <input
                    type="email"
                    id="input_apellidos"
                    className="contenedores-de-modales-de-admin-textinput1 input"
                    />
                </div>
                </div>
                <div className="contenedores-de-modales-de-admin-container14">
                <div className="contenedores-de-modales-de-admin-container15">
                    <span className="contenedores-de-modales-de-admin-text09">
                    Número celular
                    </span>
                    <input
                    type="email"
                    id="input_numero"
                    className="contenedores-de-modales-de-admin-textinput2 input"
                    />
                </div>
                <div className="contenedores-de-modales-de-admin-container16">
                    <span className="contenedores-de-modales-de-admin-text10">
                    <span>Dirección</span>
                    <br></br>
                    </span>
                    <input
                    type="email"
                    id="input_direccion"
                    className="contenedores-de-modales-de-admin-textinput3 input"
                    />
                </div>
                </div>
                <div className="contenedores-de-modales-de-admin-container17">
                <div className="contenedores-de-modales-de-admin-container18">
                    <span className="contenedores-de-modales-de-admin-text13">
                    Correo Electrónico
                    </span>
                    <input
                    type="email"
                    id="input_correo"
                    disabled="true"
                    className="contenedores-de-modales-de-admin-textinput4 input"
                    />
                </div>
                <div className="contenedores-de-modales-de-admin-container19">
                    <span className="contenedores-de-modales-de-admin-text14">
                    <span>Nombre de usuario</span>
                    <br></br>
                    </span>
                    <input
                    type="email"
                    id="input_username"
                    className="contenedores-de-modales-de-admin-textinput5 input"
                    />
                </div>
                </div>
                <button
                id="boton_guardar"
                type="button"
                className="contenedores-de-modales-de-admin-button4 button"
                onClick={handleUpdateProfile}
                >
                Guardar cambios
                </button>
                <svg
                    viewBox="0 0 1024 1024"
                    className="contenedores-de-modales-de-admin-icon06"
                    onClick={handleCancelarMostrar}
                >
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
            </div>
            </div>
            )}
            {showPopup && <div className="popup-overlay" />}
            {showPopup && (
            <div className="popup">
            <div
                id="cont_cerrarses"
                className="contenedores-de-modales-de-admin-container06"
            >
                <div className="contenedores-de-modales-de-admin-container07">
                <span className="contenedores-de-modales-de-admin-text03">
                    ¿Seguro que desea eliminar el empleado?
                </span>
                <svg
                    viewBox="0 0 1024 1024"
                    className="contenedores-de-modales-de-admin-icon04"
                    onClick={handleCancelar}
                >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
                </div>
                <div className="contenedores-de-modales-de-admin-container08">
                <button
                    id="boton_cancelar"
                    type="button"
                    className="contenedores-de-modales-de-admin-button2 button"
                    onClick={handleCancelar}
                >
                    Cancelar
                </button>
                <button
                    id="boton_cerrarses"
                    type="button"
                    className="contenedores-de-modales-de-admin-button3 button"
                    onClick={handleConfirmar}
                >
                    Aceptar
                </button>
                </div>
            </div>
            </div>
            )}
            <div id="contenedor-iconos" className="icons-container">
                <svg
                    viewBox="0 0 1024 1024"
                    className="contenedores-de-modales-de-admin-icon08"
                    onClick={handleEliminarUsuario}
                >
                    <path d="M662 170h148v86h-596v-86h148l44-42h212zM342 384v426h340v-426h-340zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                </svg>
                <svg
                    viewBox="0 0 1024 1024"
                    className="contenedores-de-modales-de-admin-icon10"
                    onClick={handleMostrar}
                >
                    <path d="M469.333 128h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM759.168 76.501l-405.333 405.333c-5.205 5.163-9.259 11.947-11.221 19.84l-42.667 170.667c-1.664 6.4-1.792 13.568 0 20.693 5.717 22.869 28.885 36.779 51.755 31.061l170.667-42.667c7.125-1.749 14.080-5.504 19.84-11.221l405.333-405.333c25.984-25.984 38.997-60.16 38.997-94.165s-13.013-68.181-38.997-94.165-60.203-39.040-94.208-39.040-68.181 13.013-94.165 38.997zM819.499 136.832c9.344-9.344 21.504-13.995 33.835-13.995s24.491 4.651 33.835 13.995 13.995 21.504 13.995 33.835-4.651 24.491-13.995 33.835l-396.971 396.971-90.197 22.571 22.571-90.197z"></path>
                </svg>
            </div>
            
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