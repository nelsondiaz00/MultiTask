import React, { useEffect, useState } from 'react';
import '../admin/css/admin-2.css'
import { DataGrid } from '@mui/x-data-grid';
import { getEmployees } from '../../controller/load-data-control'

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
             <svg
                viewBox="0 0 1024 1024"
                id="icon_eliminar"
                className="admin2-icon3"
              >
                <path d="M662 170h148v86h-596v-86h148l44-42h212zM342 384v426h340v-426h-340zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                id="icon_editar"
                className="admin2-icon5"
              >
                <path d="M469.333 128h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM759.168 76.501l-405.333 405.333c-5.205 5.163-9.259 11.947-11.221 19.84l-42.667 170.667c-1.664 6.4-1.792 13.568 0 20.693 5.717 22.869 28.885 36.779 51.755 31.061l170.667-42.667c7.125-1.749 14.080-5.504 19.84-11.221l405.333-405.333c25.984-25.984 38.997-60.16 38.997-94.165s-13.013-68.181-38.997-94.165-60.203-39.040-94.208-39.040-68.181 13.013-94.165 38.997zM819.499 136.832c9.344-9.344 21.504-13.995 33.835-13.995s24.491 4.651 33.835 13.995 13.995 21.504 13.995 33.835-4.651 24.491-13.995 33.835l-396.971 396.971-90.197 22.571 22.571-90.197z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                id="icon_habilitar"
                className="admin2-icon7"
              >
                <path d="M512 704q-44 0-84 22l-22-24q-2-2-22-24 56-38 128-38 68 0 128 38-4 2-23 23t-21 25q-38-22-84-22zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM298 406q0-26 19-45t45-19 45 19 19 45-19 45-45 19-45-19-19-45zM598 406q0-26 19-45t45-19 45 19 19 45-19 45-45 19-45-19-19-45z"></path>
              </svg>
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