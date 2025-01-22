const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const responseDiv = document.getElementById("response");
const playButton = document.getElementById("playVideo");
const video = document.getElementById("background-video");

playButton.addEventListener("click", () => {
    video.muted = false; // Unmute the video
    video.play(); // Play the video
    document.getElementById("video-overlay").style.display = "none"; // Hide the button
});

yesButton.addEventListener("click", () => {
    responseDiv.innerHTML = "YAYYYY! thank you my love for being such a major part of my life these past two years... check your bank account... 🥰";
});

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.top = `${Math.random() * 80}vh`;
    noButton.style.left = `${Math.random() * 80}vw`;
});
