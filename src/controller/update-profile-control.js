export async function updateProfile() {
    try{
        const nameInput = document.getElementById("input_nombres");
        const lastNameInput = document.getElementById("input_apellidos");
        const addressInput = document.getElementById("input_direccion");
        const userNameInput = document.getElementById("input_username");
        const emailInput = document.getElementById("input_correo");
        const passwordInput = document.getElementById("input_contraseña");
        const phoneInput = document.getElementById("input_numero");
        
        
        const user = {
            nombre: nameInput.value,
            apellidos: lastNameInput.value,
            nUsuario: userNameInput.value,
            password: passwordInput.value,
            telefono: phoneInput.value,
            direccion: addressInput.value,
            correo: emailInput.value
        };

    const isEmpty = Object.values(user).some(value => value === '');

    if (isEmpty) {
        return 404
    }

    console.log(JSON.stringify(user))
        // Realiza la solicitud a la API
        const response = await fetch(`http://localhost:1234/multitask/person/${emailInput}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user) 
        });
        
        if (response.ok) {
            //console.log(response.json())
            const data = await response.json();
            console.log("datos")
            console.log(data)
            nameInput.value = data.nombre;
            lastNameInput.value = data.apellidos;
            addressInput.value = data.direccion;
            userNameInput.value = data.nUsuario;
            passwordInput.value = data.password;
            phoneInput.value = data.telefono;

            // alert('Perfil actualizado correctamente'); 

            return 200;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            // alert('Algún dato fue ingresado correctamente, revisa por favor'); 
            return 400; 
        }
    } catch (error) {
        // console.error('Error de red:', error);
        return 400; 
    }
}


export async function updateProfileTemp() {
    
    const nameInput = document.getElementById("input_nombres");
    const lastNameInput = document.getElementById("input_apellidos");
    const addressInput = document.getElementById("input_direccion");
    const userNameInput = document.getElementById("input_username");
    const emailInput = document.getElementById("input_correo");
    const phoneInput = document.getElementById("input_numero");
    const password = document.getElementById("input_contrasena");

    
    const user = {
        nombre: nameInput.value,
        apellidos: lastNameInput.value,
        nUsuario: userNameInput.value,
        telefono: phoneInput.value,
        direccion: addressInput.value,
        correo: emailInput.value,
        password : password.value
    };
   

    const isEmpty = Object.values(user).some(value => value === '');

    if (isEmpty) {
        return 404
    }

    console.log(JSON.stringify(user))
    try {
        // Realiza la solicitud a la API
        const response = await fetch(`http://localhost:1234/multitask/person/${emailInput}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user) 
        });
        
        if (response.ok) {
            //console.log(response.json())
            const data = await response.json();
            console.log("datos")
            console.log(data)
            nameInput.value = data.nombre;
            lastNameInput.value = data.apellidos;
            addressInput.value = data.direccion;
            userNameInput.value = data.nUsuario;
            phoneInput.value = data.telefono;

            // alert('Perfil actualizado correctamente'); 

            return 200;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            // alert('Algún dato fue ingresado correctamente, revisa por favor'); 
            return 400; 
        }
    } catch (error) {
        // console.error('Error de red:', error);
        return 400; 
    }
}


export async function updateProfileCompanie() {
    
    const nameInput = document.getElementById("input_nombres");
    const phoneInput = document.getElementById("input_numtel");
    const emailInput = document.getElementById("input_correo");
    const password = document.getElementById("input_contrasena");
    const info = document.getElementById("input_info");
    const direccion = document.getElementById("input_direccion");

    
    const user = {
        nombre_Empresa : nameInput.value,
        telefono : phoneInput.value,
        direccion : direccion.value,
        password : password.value,
        descripcion : info.value,
    };
   

    const isEmpty = Object.values(user).some(value => value === '');

    if (isEmpty) {
        return 404
    }

    console.log(JSON.stringify(user))
    try {
        // Realiza la solicitud a la API
        const response = await fetch(`http://localhost:1234/multitask/companie/${emailInput.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user) 
        });
        
        if (response.ok) {
            //console.log(response.json())
            const data = await response.json();
            console.log("datos")
            console.log(data)

            nameInput.value = data.nombre_Empresa;
            phoneInput.value = data.telefono;
            direccion.value = data.direccion;
            password.value = data.password;
            phoneInput.value = data.telefono;
            info.value = data.descripcion_publica;
            alert('Perfil actualizado correctamente'); 

            return 200;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            alert('Algún dato fue ingresado correctamente, revisa por favor'); 
            return 400; 
        }
    } catch (error) {
        console.error('Error de red:', error);
        alert('Error de red'); 
        return 400; 
    }
}

export async function updatePostulation(value) {
    
    if (value) {
        try {
            // Realiza la solicitud a la API
            const response = await fetch(`http://localhost:1234/multitask/companie/postulation/${value}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log("datos")
                console.log(data)

                alert('Postulación actualizada'); 

                return data;
            } else {
                console.error('Error al realizar la solicitud:', response.statusText);
                alert('Algún dato fue ingresado correctamente, revisa por favor'); 
                return 400; 
            }
        } catch (error) {
            console.error('Error de red:', error);
            alert('Error de red'); 
            return 400; 
        }
    }else{
        return 400;
    }
}
