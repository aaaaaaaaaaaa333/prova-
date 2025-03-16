document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    // 🌟 Controllo per l'admin
    if (username === "admin" && email === "admin@es") {
        console.log("Accesso admin, reindirizzamento...");
        window.location.href = "admin.htm"; // Reindirizza alla pagina admin
        return; // Termina la funzione qui
    }

    try {
        // 🔥 Inizializzazione Firebase (IMPORTANTE: deve essere dichiarata all'inizio)
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
        import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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

        // ✅ Salvataggio in Firebase (solo se non è admin)
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            email: email,
            timestamp: new Date()
        });

        console.log("✅ Utente registrato con ID:", docRef.id);
        alert("Registrazione completata!");

        // 🔄 Resetta il form dopo la registrazione
        document.getElementById("registrationForm").reset();
    } catch (error) {
        console.error("❌ Errore durante la registrazione:", error);
        alert("Errore: " + error.message);
    }
});
