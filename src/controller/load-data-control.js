export async function loadData() {
    const emailInput = localStorage.getItem('correo');
    try {
        // Realiza la solicitud a la API
        const response = await fetch(`http://localhost:1234/multitask/${emailInput}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            // console.log(data)
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

export async function putInfo(){
    try{
        const data = await loadData();
        const nameInput = document.getElementById("input_nombres");
        const lastNameInput = document.getElementById("input_apellidos");
        const documentInput = document.getElementById("input_numdoc");
        const addressInput = document.getElementById("input_direccion");
        const userNameInput = document.getElementById("input_username");
        const emailInput = document.getElementById("input_correo");
        const passwordInput = document.getElementById("input_contraseña");
        const phoneInput = document.getElementById("input_numero");
        const genderInput = document.getElementById("input_genero");
        const documentType = document.getElementById("input_tipdoc")
        const dateInput = document.getElementById("input_cumple");
        const fechaNacimiento = new Date(data.fecha_nacimiento); // Convertir la cadena de fecha en un objeto Date
        const formattedDate = fechaNacimiento.toISOString().split('T')[0]; // Obtener la fecha en formato "yyyy-MM-dd"

        // console.log(data)

        nameInput.value = data.nombre;
        lastNameInput.value = data.apellidos;
        documentInput.value = data.cedula;
        addressInput.value = data.direccion;
        userNameInput.value = data.nUsuario;
        emailInput.value = data.correo;
        passwordInput.value = data.password;
        phoneInput.value = data.telefono;
        dateInput.value = formattedDate;
        genderInput.value = data.genero;
        documentType.value = data.tipo_documento;

        // console.log(genderInput.value)

        const inputData = {
            "nombre": nameInput.value,
            "apellidos": lastNameInput.value,
            "correo": emailInput.value,
            "direccion": addressInput.value,
            "telefono": phoneInput.value,
            "nUsuario": userNameInput.value,
            "cedula": documentInput.value,
            "fecha_nacimiento": dateInput.value,
            "genero": genderInput.value,
            "password": passwordInput.value,
            "tipoDocumento": documentType.value
        };
        // console.log(inputData)


        return inputData
    }catch(e){console.error(e)}

}

export async function getEmployees() {
    try {
        const response = await fetch(`http://localhost:1234/multitask/employee`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            const usuarios = data.map(usuario => ({
                id: usuario.idUsuario,
                nombres: usuario.nombre,
                apellidos: usuario.apellidos,
                documento: usuario.cedula,
                direccion: usuario.direccion
            }));
            return usuarios;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            return false;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return false;
    }
}

export async function getCompanies() {
    try {
        const response = await fetch(`http://localhost:1234/multitask/companies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            const users = data.map(usuario => ({
                id: usuario.idUsuario,
                nombreEmpresa: usuario.nombre,
                direccion: usuario.apellidos,
                documento: usuario.cedula,
                direccion: usuario.direccion
            }));
            return users;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            return false;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return false;
    }
}

export async function getServices(sector) {
    try {
        const response = await fetch(`http://localhost:1234/multitask/service/${sector}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            const services = data.map(service => ({
                titulo: service.nombre,
                descripcion: service.descripcion,
            }));
            
            return services;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            return false;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return false;
    }
}