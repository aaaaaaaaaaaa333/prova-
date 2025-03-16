document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();

    // Verificación de admin
    if (username === "admin" && email === "admin@es") {
        window.location.href = 'admin.htm';  // Redirige a la página de admin
        return;  // IMPORTANTE: Evita que el código siga ejecutándose
    }

    // Guarda el usuario en localStorage
    guardarUsuario(username, email);

    // Muestra una alerta de registro exitoso
    alert("¡Registro exitoso!");

    // Restablece el formulario
    document.getElementById("registrationForm").reset();
});

function guardarUsuario(username, email) {
    let usuarios = JSON.parse(localStorage.getItem("users")) || [];
    usuarios.push({ username: username, email: email });
    localStorage.setItem("users", JSON.stringify(usuarios));
}
