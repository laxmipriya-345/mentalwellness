async function sendMessage() {
    let userInput = document.getElementById("userInput");
    let chatBox = document.getElementById("chat-box");
    let message = userInput.value;

    if (message.trim() === "") return;

    chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

    let response = await fetch("/get_response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    });

    let data = await response.json();
    chatBox.innerHTML += `<p><b>AI:</b> ${data.response}</p>`;

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
