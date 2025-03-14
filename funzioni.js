async function cargarUsuarios() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Vacía la lista antes de agregar

    if (querySnapshot.empty) {
        console.log("Nessun utente trovato in Firestore.");
        return;
    }

    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(userData); // Stampa i dati ricevuti per il debug

        const li = document.createElement("li");
        li.textContent = `Username: ${userData.username || "No data"}, Email: ${userData.email || "No data"}`;
        userList.appendChild(li);
    });
}
