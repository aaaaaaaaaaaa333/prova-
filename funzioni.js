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
        
        console.log("Document written with ID: ", docRef.id); // Aggiungi questa linea per vedere se i dati vengono effettivamente registrati

        alert("Registrazione completata!");
        document.getElementById("registrationForm").reset();
    } catch (error) {
        alert("Errore: " + error.message);
    }
});
