export async function registerUser() {
    try{
        // console.log("act")
        const nombre = document.getElementById("input_nombres");
        const apellidos = document.getElementById("input_apellidos");
        const cedula = document.getElementById("input_numdoc");
        const correo = document.getElementById("input_correo");
        const direccion = document.getElementById("input_direccion");
        const telefono = document.getElementById("input_numero");
        const nUsuario = document.getElementById("input_username");
        const tipoCuentaEleccion = document.getElementById("input_tipocuenta");
        const fechaCumple = document.getElementById("input_cumple")
        // console.log(tipoCuentaEleccion.value)
        console.log(tipoCuentaEleccion.value)

        const user = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            cedula: cedula.value,
            correo: correo.value,
            direccion: direccion.value,
            telefono: telefono.value,
            nUsuario: nUsuario.value,
            tipoUsuario: tipoCuentaEleccion.value
        };
        const isEmpty = Object.values(user).some(value => value === '');

        if (isEmpty) {
            alert('Por favor, complete todos los campos.');
            return; // No envíes la solicitud si algún campo está vacío
        }
        
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
            /*nombre.value = "";
            apellidos.value = "";
            cedula.value = "";
            correo.value = "";
            direccion.value = "";
            telefono.value = "";
            nUsuario.value = "";
            fechaCumple.value = "";*/
            alert("Usuario creado exitosamente")
            return data;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            return false;
        }
    
    } catch (error) {
        console.error('Error de red:', error);
        return false; 
    }
}