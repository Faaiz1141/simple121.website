//JavaScript to change the text when button is clicked
document.getElementById("change-text").addEventListener("click",
    function() {
        const messageElement = 
    document. getElementById("message");
    messageElement.textContent = 
    "You messed up by clicking this!";
    messageElement.style.color = "red";
    });