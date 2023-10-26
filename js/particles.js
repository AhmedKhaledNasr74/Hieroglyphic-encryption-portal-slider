particlesHolder = document.querySelector(".particles");
let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//function to generate the moving particles on the background
function generateParticles() {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.width = `${random(1, 3)}px`;
    particle.style.height = `${random(1, 3)}px`;
    particle.style.filter = `blur(${Math.random()}px)`;
    let x = random(-100, 150),
    y = random(-50, 50);
    particle.style.transform = `translate(${x}px , ${y}px)`;
    particle.style.backgroundColor = "#fff";

    particle.animate(
    [
        { transform: `translate(${x}px,${y}px)` },
        { transform: `translate(${window.innerWidth}px,${random(-50, 50)}px)` },
    ],
    {
        duration: random(6000, 12000),
        iterations: Infinity,
    }
    );

    particlesHolder.appendChild(particle);
}
for (let i = 0; i < 125; i++) {
    generateParticles();
    generateParticles();
}

/*==================================================================================encryption.js*/
