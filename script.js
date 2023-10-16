document.getElementById("addText").addEventListener("click", function () {
    const textElement = document.createElement("p");
    const textContent = prompt("Enter your text content:"); // Prompt for user input
    textElement.textContent = textContent;
    document.getElementById("content").appendChild(textElement);
});

document.getElementById("addImage").addEventListener("click", function () {
    const imageElement = document.createElement("img");
    imageElement.src = "image.jpg"; 
    imageElement.allowFullscreen = true;
    document.getElementById("content").appendChild(imageElement);
});

document.getElementById("addVideo").addEventListener("click", function () {
    const videoElement = document.createElement("iframe");
    videoElement.src = "https://www.youtube.com/embed/W6NZfCO5SIk?si=P06YOl7qA318CPm6";
    videoElement.allowFullscreen = true;
    document.getElementById("content").appendChild(videoElement);
});