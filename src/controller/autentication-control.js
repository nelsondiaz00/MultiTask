export async function getUser() {
    const emailInput = document.getElementById("input_correo").value;

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
const OrigenComponente = () => {
    const correo = document.getElementById("input_correo").value;
    localStorage.setItem('correo', correo); // Guarda el correo en el almacenamiento local
}

export async function finalValidation(event, history) {
    event.preventDefault(); // Evita la acción predeterminada del enlace

    const userData = await getUser();

    if (userData) {
        const passwordInput = document.getElementById("input_contrasena").value;

        const passwordFromResponse = userData.password;

        if (passwordInput === passwordFromResponse) {
            OrigenComponente()
            // history.push('/inicio-de-sesion/autenticacion');
            return true;
        } else {
            alert('La contraseña es incorrecta. Por favor, verifica tus datos.'); 
            return false;
        }
    } else {
        alert('La validación falló. Por favor, verifica tus datos.'); 
        return false;
    }
}


