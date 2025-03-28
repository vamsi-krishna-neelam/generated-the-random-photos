const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

let imageNum = 10; // Declare imageNum at a higher scope

btnEl.addEventListener("click", () => {
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;

        imageContainerEl.appendChild(newImgEl);
    }
}
