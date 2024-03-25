export async function loadData() {
    const emailInput = localStorage.getItem('correo');
    try {
        // Realiza la solicitud a la API
        const response = await fetch(`http://localhost:1234/multitask/person/${emailInput}`, {
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
        const userInput = document.getElementById("input_username");
        const emailInput = document.getElementById("input_correo");
        const phoneInput = document.getElementById("input_numero");
        const addressInput = document.getElementById("input_direccion");
        
        nameInput.value = data.nombre;
        lastNameInput.value = data.apellidos;
        userInput.value = data.nUsuario;
        emailInput.value = data.correo;
        phoneInput.value = data.telefono;
        addressInput.value = data.direccion;
        const inputData = {
            "nombre": nameInput.value,
            "apellidos": lastNameInput.value,
            "correo": emailInput.value,
            "direccion": addressInput.value,
            "telefono": phoneInput.value,
            "nUsuario": userInput.value
        };

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