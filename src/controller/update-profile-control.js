export async function updateProfile() {
    const nameInput = document.getElementById("input_nombres");
    const lastNameInput = document.getElementById("input_apellidos");
    const userInput = document.getElementById("input_username");
    const emailInput = document.getElementById("input_correo");
    const phoneInput = document.getElementById("input_numero");
    const addressInput = document.getElementById("input_direccion");
    
    const user = {
        nombre: nameInput.value,
        apellidos: lastNameInput.value,
        nUsuario: userInput.value,
        correo: emailInput.value,
        telefono: phoneInput.value,
        direccion: addressInput.value
    };

    console.log(JSON.stringify(user))
    try {
        // Realiza la solicitud a la API
        const response = await fetch(`http://localhost:1234/multitask/person/${user.username}`, {
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
            userInput.value = data.nUsuario;
            emailInput.value = data.correo;
            phoneInput.value = data.telefono;
            addressInput.value = data.direccion;
            alert('Perfil actualizado correctamente'); 

            return data;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
            alert('Algún dato fue ingresado correctamente, revisa por favor'); 
            return false; 
        }
    } catch (error) {
        console.error('Error de red:', error);
        return false; 
    }
}
