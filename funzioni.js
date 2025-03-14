document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    // Verificación de admin
    admin(username, email);

    // Guarda el usuario en localStorage
    guardarUsuario(username, email);

    // Muestra una alerta de registro exitoso
    alert("¡Registro exitoso!");

    // Restablece el formulario
    document.getElementById("registrationForm").reset();
});

function admin(username, email) {
    if (username === "admin" && email === "admin@es") {
        window.location.href = 'admin.htm';  // Redirige a la página de admin
    }
}

function guardarUsuario(username, email) {
    // Recupera la lista de usuarios existente o crea un array vacío
    let usuarios = JSON.parse(localStorage.getItem("users")) || [];

    // Agrega el nuevo usuario al array
    usuarios.push({ username: username, email: email });

    // Guarda el array actualizado en localStorage
    localStorage.setItem("users", JSON.stringify(usuarios));
}
