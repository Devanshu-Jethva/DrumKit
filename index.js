// on button click

const buttons = document.querySelectorAll(".drum");
// console.log(buttons);
let sound;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        makeSound(buttons[i].innerHTML);

        addAnimation(buttons[i].innerHTML);
    });
}

// on key press

document.addEventListener("keypress", (e) => {
    makeSound(e.key);

    addAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "l":
            sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
    }
}

function addAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}
