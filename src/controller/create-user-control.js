export async function registerUser() {
    try{
        const nombre = document.getElementById("input_nombres");
        const apellidos = document.getElementById("input_apellidos");
        const tipoDocumento = document.getElementById("input_tipdoc");
        const cedula = document.getElementById("input_numdoc");
        const correo = document.getElementById("input_correo");
        const direccion = document.getElementById("input_direccion");
        const telefono = document.getElementById("input_numero");
        const fechaCumple = document.getElementById("input_cumple");
        const generoSeleccionado = document.getElementById("input_genero");
        const password = document.getElementById("input_contraseña");
        const nUsuario = document.getElementById("input_username");
        const tipoCuentaEleccion = document.getElementById("input_tipocuenta");


        const user = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            tipo_documento: tipoDocumento.value,
            cedula: cedula.value,
            correo: correo.value,
            direccion: direccion.value,
            telefono: telefono.value,
            fecha_nacimiento: fechaCumple.value,
            genero: generoSeleccionado.value,
            password: password.value,
            nUsuario: nUsuario.value,
            tipoUsuario: tipoCuentaEleccion.value
        };

        const isEmpty = Object.values(user).some(value => value === '');

        if (isEmpty) {
            return 404
        }
        console.log(correo.value);

        const validation = await fetch(`http://localhost:1234/multitask/person/${correo.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(!validation.ok){

            const response = await fetch('http://localhost:1234/multitask/person', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });
            
            if (response.ok) {
                const data = await response.json();
                // Después de crear el objeto user
                nombre.value = "";
                apellidos.value = "";
                cedula.value = "";
                correo.value = "";
                direccion.value = "";
                telefono.value = "";
                nUsuario.value = "";
                fechaCumple.value = "";
                password.value = "";
                return 200;
            } else {
                // console.error('Error al realizar la solicitud:', response.statusText);
                return 500;
            }
        }else{
            return 401
        }
    
    } catch (error) {
        console.error('Error de red:', error);
        return 500; 
    }
}