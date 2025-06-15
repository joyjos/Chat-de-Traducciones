let translateButton = document.querySelector("#translateButton");

translateButton.addEventListener("click", () => {

    // Valor a traducir
    const text = document.querySelector("#inputText").value.trim();

    // Lenguaje de destino
    const targetLang = document.querySelector("#targetLang").value;

    if(!text) return false;

    // Meter el mensaje del usuario a la caja de mensajes
    const userMesagge = document.createElement("div");
    userMesagge.className = "chat__message chat__nessage--user";
    userMesagge.textContent = text;

    const messagesContainer = document.querySelector(".chat__messages");
    messagesContainer.appendChild(userMesagge);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Petición Ajax al BackEnd


    // Agregar el mensaje de la IA al chat


    // Vaciar el input de tipo text
})