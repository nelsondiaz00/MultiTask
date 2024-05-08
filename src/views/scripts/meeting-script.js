import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../employee/css/empleado-2.css'
import { getCompanieUsers, getInterview } from '../../controller/load-data-control';

const EmpleadoCitas = (props) => {
  const [entrevistas, setEntrevistas] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
        try {
            const data = await getInterview();
            setEntrevistas(data);

        } catch (error) {
            console.error('Error al eliminar empleado:', error);
        }
    };

    fetchEmployees();
  }, []);
  const handleEliminarUsuario = () => {
    if(selectedRows.length > 0){
        setShowPopup(true);
    }
  };
  const handleMostrar = () => {
    if(selectedRows.length > 0){
        setShowPopup(true);
    }
  };

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

  if (!entrevistas) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }
  const columns = [
    { field: 'idPostulacion', headerName: 'ID', width: 100 },
    { field: 'titulo_Entrevista', headerName: 'Título', width: 250 },
    { field: 'fecha_Entrevista', headerName: 'Fecha', width: 250 },
    { field: 'idPostulacion', headerName: 'Postulado', width: 250 },
    { field: 'aceptado', headerName: 'Estado', width: 300, renderCell: (params) => getSVG(params.value) },
  ];
  
  console.log(entrevistas, " USUSUARIOS EMPRESA!")
  return (
    <div id="contenedor_principal" className="empleado3-container7">
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
      <span className="empleado3-text3">
        <span className="empleado3-text4">Cliente - Postulado</span>
        <br></br>
      </span>
      <div className="admin2-container8">
            <div style={{ height: 294, width: '100%' }}>
                <DataGrid
                    rows={entrevistas}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 25]}
                    disableSelectionOnClick
                    getRowId={(row) => row.idEntrevista}
                />
            </div>
      </div>

    </div>
  )
}
export default EmpleadoCitas
