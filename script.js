const symbols = ["🍒", "🍊", "🍋", "🍇", "🍉"];

function spin() {
    const reels = document.querySelectorAll(".reel");
    const result = document.getElementById("result");

    let spinResult = [];
    reels.forEach(reel => {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        reel.textContent = symbols[randomIndex];
        spinResult.push(randomIndex);
    });

    if (spinResult[0] === spinResult[1] && spinResult[1] === spinResult[2]) {
        result.textContent = "¡Ganaste!";
    } else {
        result.textContent = "¡Perdiste!";
    }
}
