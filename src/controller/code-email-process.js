export async function sendEmail() {
    const emailInput = localStorage.getItem('correo');
    console.log(emailInput)
    try {
        // Realiza la solicitud a la API
        const response = await fetch(`http://localhost:1234/multitask/generate-code/${emailInput}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
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

export async function finalValidation(event, history, code) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    //console.log(code)
    if (code) {
        //console.log(code)
        const codeInput = document.getElementById("input_codigo").value;
        //console.log(codeInput)
        if (codeInput === code) {
            const dataFinal = await getUser()
            console.log(dataFinal.tipoUsuario)
            history.push(`/${dataFinal.tipoUsuario.toLowerCase()}-inicio`);
        } else {
            alert('El código ingresado es incorrecto. Por favor, verifica tus datos.'); 
        }
    } else {
        alert('La validación falló. Por favor, verifica tus datos.'); 
    }
}


export async function getUser() {
    const emailInput = localStorage.getItem('correo');
    console.log(emailInput)
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

