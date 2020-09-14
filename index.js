window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visuals = document.querySelector(".visuals");
    const colors = ["#9b5de5", "#f15bb5", "#f94144", "#00bbf9", "#ee6c4d", "ff006e"];

    console.log(sounds)


    //let go to sounds

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });
    //function for making bubbles
    const createBubbles = (index) => {
        const bubbles = document.createElement("div");
        visuals.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = "jump 1s ease";
        bubbles.addEventListener("animationend", function() {
            visuals.removeChild(this);
        })
    };
});