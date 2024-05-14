export async function updateInterview(estado, id) {
    try{
        const idEntrevista = id;
        const asunto = document.getElementById("input_asunto");
        const aceptado = estado;
        const descripcion = document.getElementById("textarea_desc");
        const cualidades = document.getElementById("textarea_cualidades");
        const debilidades = document.getElementById("textarea_debilidades");

        const interview = {
            idEntrevista: idEntrevista,
            asunto: asunto.value,
            aceptado: aceptado,
            descripcion: descripcion.value,
            cualidades: cualidades.value,
            debilidades: debilidades.value,
        };

        const isEmpty = Object.values(interview).some(value => value === '');

        if (isEmpty) {
            alert("Información sin rellenar")
            return 404
        }
        console.log(JSON.stringify(interview), " ENTREVISTAAAAAAAAAAAA")

        const response = await fetch('http://localhost:1234/multitask/interview/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(interview)
        });
        
        if (response.ok) {
            alert("Cita terminada")
            return true;
        } else {
            // console.error('Error al realizar la solicitud:', response.statusText);
            return 500;
        }
    
    } catch (error) {
        console.error('Error de red:', error);
        return 500; 
    }
}