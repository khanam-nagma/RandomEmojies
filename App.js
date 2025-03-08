const emoji = document.querySelector("#emoji");
console.log(emoji);

const emojies = [
    "💕",
    "😍",
    "😘",
    "👌",
    "🤣",
    "😒",
    "👍",
    "🙌",
    "😘",
    "😇",
    "😊",
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😀",
    "😁",
    "😆",
    "🙂",
    "🙃",
    "🫠",
    "😉",
    "💐",
    "🌸",
    "💮",
    "🪷",
    "🌹",
    "🌻",
    "🌼",
    "🌷",
    "🪻",
]

emoji.addEventListener("mouseover", () => {
    emoji.innerText = emojies[Math.floor(Math.random()* emojies.length)];
});