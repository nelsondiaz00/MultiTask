export async function getPreBill(info) {
    try {
        // Realiza la solicitud a la API
        console.log(info, " ?? wtf bro")
        const response = await fetch(`http://localhost:1234/multitask/billing/pre-bill/${info.nivelEducacion}/${info.
        cantidadRequerida
        }
        `, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, " PREBILLPROCESS")
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

export async function registerPostulation(info) {
    try {
        console.log(info, " INFORMMEMEME")
        const response = await fetch('http://localhost:1234/multitask/companie/postulation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, " REGISTRO DE POSTULACION")
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

export async function payMethod(info) {
    try {
         console.log(info, " INFO TARJETA")
        const response = await fetch('http://localhost:1234/multitask/person/pay-method', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, " METODO PAGO REGISTRAR")
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

