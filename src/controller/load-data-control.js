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
            console.log(data, " Q UE ES ESTOOOOOOOO")
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
        // const formattedDate = fechaNacimiento.toISOString().split('T')[0]; // Obtener la fecha en formato "yyyy-MM-dd"

        console.log(data, " PQ NO SIRVEEEEEEE")

        nameInput.value = data.nombre;
        lastNameInput.value = data.apellidos;
        documentInput.value = data.cedula;
        addressInput.value = data.direccion;
        userNameInput.value = data.nUsuario;
        emailInput.value = data.correo;
        passwordInput.value = data.password;
        phoneInput.value = data.telefono;
        dateInput.value = fechaNacimiento;
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
                direccion: usuario.direccion,
                activo: usuario.activo,
                belonging: usuario.belonging
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
        const response = await fetch(`http://localhost:1234/multitask/service/sector/${sector}`, {
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
                idProfesion: service.idProfesion, 
                nivelEducacion: service.nivel_De_Educacion,
                tiempoExperiencia: service.tiempo_Experiencia,
                sector: service.sector,

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

export async function updatePopUpEdit(id) {
    try {
        const response = await fetch(`http://localhost:1234/multitask/employee/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            return null; 
        }
    } catch (error) {
        console.error('Error de red:', error);
        return null; 
    }
}


export async function getPayMethods() {
    const emailInput = localStorage.getItem('correo');
    try {
        // Realiza la solicitud a la API
        console.log(emailInput, " EMAIL!")
        const response = await fetch(`http://localhost:1234/multitask/person/pay-method/${emailInput}`, {
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

export async function getCompanie() {
    const emailInput = localStorage.getItem('correo');
    try {
        // Realiza la solicitud a la API
        console.log(emailInput, " EMAIL!")
        const response = await fetch(`http://localhost:1234/multitask/companie/${emailInput}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "datataatta")
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

export async function getPostulado() {
    const emailInput = localStorage.getItem('correo');
    try {
        // Realiza la solicitud a la API
        console.log(emailInput, " EMAIL!")
        const response = await fetch(`http://localhost:1234/multitask/aspirant/${emailInput}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "datataatta")
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


export async function getPostulaciones() {
    const emailInput = localStorage.getItem('correo');
    try {
        // Realiza la solicitud a la API
        console.log(emailInput, " EMAILlll!")
        const response = await fetch(`http://localhost:1234/multitask/companie/postulation/${emailInput}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "infoninfofno")
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

export async function getPostulationByProfession(id) {
    try {
        // Realiza la solicitud a la API
        // console.log(emailInput, " EMAILlll!")
        const response = await fetch(`http://localhost:1234/multitask/service/profession/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "POSTULAAAAATOTOTOT")
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

export async function getInfoAspirant(email) {
    try {
        // Realiza la solicitud a la API
        // console.log(emailInput, " EMAILlll!")
        const response = await fetch(`http://localhost:1234/multitask/aspirant/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "POSTULADOOOOOO")
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


export async function getConfirm(idPostulado, idPostulacion) {
    try {
        // Realiza la solicitud a la API
        // console.log(emailInput, " EMAILlll!")
        const response = await fetch(`http://localhost:1234/multitask/aspirant/postulation/confirm/${idPostulado}/${idPostulacion}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "CONFIRMASAO")
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

export async function getCompanieUsers() {
    try {
        // Realiza la solicitud a la API
        // console.log(emailInput, " EMAILlll!")
        const response = await fetch(`http://localhost:1234/multitask/all/companie`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "CONFIRMASAO")
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

export async function getAspirantUsers() {
    try {
        // Realiza la solicitud a la API
        // console.log(emailInput, " EMAILlll!")
        const response = await fetch(`http://localhost:1234/multitask/all/aspirant`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "CONFIRMASAO")
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

export async function getInterview() {
    try {
        // Realiza la solicitud a la API
        // console.log(emailInput, " EMAILlll!")
        const response = await fetch(`http://localhost:1234/multitask/all/interview`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, "CONFIRMASAO")
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