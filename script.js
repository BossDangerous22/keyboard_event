document.addEventListener("DOMContentLoaded", function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let secretKey = getRandomKey();
    const keyList = document.getElementById("keyList");

    document.body.addEventListener("keydown", function(event) {
        const keyPressed = event.key.toLowerCase();
        if (keyPressed === secretKey) {
            const secretKeyItem = document.createElement("li");
            secretKeyItem.textContent = "SECRET KEY PRESSED: " + secretKey;
            keyList.appendChild(secretKeyItem);
            secretKey = getRandomKey();
        }
    });

    function getRandomKey() {
        return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
});
