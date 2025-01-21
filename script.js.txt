const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const responseDiv = document.getElementById("response");

yesButton.addEventListener("click", () => {
    responseDiv.innerHTML = "YAYYYYY! 🥰";
});

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.top = `${Math.random() * 80}vh`;
    noButton.style.left = `${Math.random() * 80}vw`;
});
