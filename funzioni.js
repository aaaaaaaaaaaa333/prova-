// Importazioni all'inizio del file
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Variabile globale per controllare l'invio
let isSubmitting = false;

document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    console.log("Submit event triggered"); // Debugging

    e.preventDefault(); // Previene il comportamento predefinito del form

    // Controlla se stiamo già inviando
    if (isSubmitting) {
        console.log("Already submitting, exiting"); // Debugging
        return; // Se è già in fase di invio, esci dalla funzione
    }
    isSubmitting = true; // Imposta il flag di invio

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    // 🌟 Controllo per l'admin
    if (username === "admin" && email === "admin@es") {
        console.log("Accesso admin, reindirizzamento...");
        window.location.href = "admin.html";  // Assicurati che il file esista
        isSubmitting = false; // Resetta il flag prima di uscire
        return; // Termina l'esecuzione se l'utente è admin
    }

    // 🔥 Inizializzazione Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAxKnsgnTZz0mZM88etFuD6WRv7KmpIVdU",
        authDomain: "registracion-4198b.firebaseapp.com",
        projectId: "registracion-4198b",
        storageBucket: "registracion-4198b.appspot.com",
        messagingSenderId: "885733863348",
        appId: "1:885733863348:web:3f1bdf6e32f0cba0f4cce1"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
        // ✅ Salvataggio in Firebase
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            email: email,
            timestamp: new Date()
        });


        alert("Registrazione completata!"
        // 🔄 Resetta il form dopo la registrazione
        document.getElementById("registrationForm").reset();
    } catch (error) {
        console.error("❌ Errore durante la registrazione:", error);
        alert("Errore: " + error.message);
    } finally {
        isSubmitting = false; // Resetta il flag al termine della registrazione
    }
});




/*document.getElementById("registrationForm").addEventListener("submit", function(event) {
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
 
    console.log("Document written with ID: ", docRef.id); // Aggiungi questa linea per vedere se i dati vengono effettivamente registrati
function guardarUsuario(username, email) {
    // Recupera la lista de usuarios existente o crea un array vacío
    let usuarios = JSON.parse(localStorage.getItem("users")) || [];

    // Agrega el nuevo usuario al array
    usuarios.push({ username: username, email: email });

    // Guarda el array actualizado en localStorage
    localStorage.setItem("users", JSON.stringify(usuarios));
}*/
