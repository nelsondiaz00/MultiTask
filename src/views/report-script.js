import React from 'react'
import './admin-4.css'

const ReportView = (props) => {
    return  (
    <div id="contenedor_principal" className="admin4-container07">
        <span className="admin4-text3">
        <span className="admin4-text4">Informes</span>
        <br></br>
        </span>
        <div className="admin4-container08">
            <div className="admin4-container09">
                <div className="admin4-container10">
                    <button
                        id="boton_informeingeg"
                        type="button"
                        className="admin4-button button"
                    >
                        Crear informe Ingresos - Egresos
                    </button>
                </div>
                <div className="admin4-container11">
                    <button
                        id="boton_informeingeg"
                        type="button"
                        className="admin4-button1 button"
                    >
                        Crear informe Empresas - Postulados
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ReportView;