

function guardarDatos() {

    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const datos= document.getElementById("datosin");


    if (!cedula || !nombre || !apellido) {
        datos.innerText="Datos Incompletos"

        return;
    }

    const profesor = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido
    };

    const profesorJSON = JSON.stringify(profesor);


    document.getElementById("jsontexto").value = profesorJSON;
}


function cargarJSON() {

    const datos_json = document.getElementById("jsontexto").value;


    if (!datos_json) {
        alert("No hay datos en el campo JSON.");
        return;
    }
        const profesor = JSON.parse(datos_json);

        document.getElementById("cedula").value = profesor.cedula || '';
        document.getElementById("nombre").value = profesor.nombre || '';
        document.getElementById("apellido").value = profesor.apellido || '';

}
