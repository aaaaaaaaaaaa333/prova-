// Gestione della registrazione
document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    try {
        // Salva i dati in Firestore
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            email: email,
            timestamp: new Date()
        });

        console.log("Document written with ID: ", docRef.id); // Stampa l'ID del documento creato
        console.log("Dati salvati: ", { username, email }); // Verifica i dati salvati

        alert("Registrazione completata!");
        document.getElementById("registrationForm").reset();
        cargarUsuarios(); // Ricarica la lista dopo aver aggiunto l'utente
    } catch (error) {
        alert("Errore: " + error.message);
    }
});
