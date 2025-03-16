document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    // Verifica se l'utente è admin
    if (username === "admin" && email === "admin@es") {
        window.location.href = "admin.htm"; // Reindirizza alla pagina admin
        return; // Esce dalla funzione senza salvare in Firebase
    }

    try {
        // Salva i dati in Firestore solo se non è admin
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            email: email,
            timestamp: new Date()
        });

        console.log("Document written with ID: ", docRef.id);
        alert("Registrazione completata!");
        document.getElementById("registrationForm").reset();
    } catch (error) {
        alert("Errore: " + error.message);
    }
});
