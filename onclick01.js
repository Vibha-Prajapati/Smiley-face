
// function changeImage() {
//     const main = document.querySelector("#image-main img");
//     const button = document.querySelector("button");
//     main.src= "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
//     main.style.height = '350px';
//     main.style.width = '350px';
//     button.innerText = 'happy';
//     button.style.backgroundColor = 'blue';
// }


// function changeImage() {
//     const img = document.querySelector("#image-main img");
//     const button = document.querySelector("button");
//     img.src = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";
//     button.innerText = 'Unhappy';
//     button.style.backgroundColor = 'blue';
// }

let isHappy = true;

function changeImage() {
    const img = document.querySelector("#image-main img");
    const button = document.querySelector("button");
    if (isHappy) {
        img.src = "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
        button.innerText = 'Happy';
        button.style.backgroundColor = 'green';
    } else {
        img.src = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";
        button.innerText = 'Unhappy';
        button.style.backgroundColor = 'blue';
    }
    isHappy = !isHappy;
}
