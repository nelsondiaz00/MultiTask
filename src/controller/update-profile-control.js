

export async function updateProfile() {
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
