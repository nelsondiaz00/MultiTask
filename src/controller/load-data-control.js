export async function loadData() {
    const emailInput = localStorage.getItem('correo');
    console.log(emailInput)
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

export async function putInfo(){
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
    


}