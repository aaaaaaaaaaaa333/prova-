document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    // Controllo admin
    admin(username, email);

    // Salva l'utente nel localStorage
    saveUser(username, email);

    // Mostra un alert di registrazione
    alert("Registrazione avvenuta con successo!");

    // Resetta il modulo
    document.getElementById("registrationForm").reset();
});

function admin(username, email) {
    if (username === "admin" && email === "admin@es") {
        window.location.href = 'admin.htm';  // Reindirizza all'admin
    }
}

function saveUser(username, email) {
    // Recupera la lista di utenti esistente o crea un array vuoto
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Aggiungi il nuovo utente all'array
    users.push({ username: username, email: email });

    // Salva l'array aggiornato nel localStorage
    localStorage.setItem("users", JSON.stringify(users));
}
