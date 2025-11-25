function cargarIframe() {
    // Obtener el valor del idPET desde el input
    var idPet = document.getElementById("idPet").value;

    // Asegurarse de que el idPET no esté vacío
    if (idPet) {
        // Concatenar la URL de tu portal de Appian con el idPET
        var iframeUrl = "https://plexusdemo.appianportals.com/23509ab8-0a04-4f82-b56f-31efe79f73cc-expediente?idPET=" + idPet;
        
        // Actualizar la URL del iframe
        document.getElementById("appianIframe").src = iframeUrl;
    } else {
        alert("Por favor ingresa un ID válido.");
    }
}

